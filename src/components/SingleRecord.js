import { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";
import { getRecordById } from "../actions/records";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const HomeButton = () => {
  return (
    <Link to={`/`}>
      <Button className="mt-2 mb-3">Go Back To Home</Button>
    </Link>
  );
};
const SingleRecord = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { singleRecord } = useSelector((state) => {
    return {
      singleRecord: state.records.singleRecord,
    };
  });
  useEffect(() => {
    dispatch(getRecordById(id));
  }, []);
  return (
    <Container>
      <Row>
        <Col className="text-center mt-3">
          <h1>Record Detail of ({id})</h1>
        </Col>
      </Row>
      <Row>
        <Col
          lg={{
            offset: 4,
            size: 4,
          }}
          md={{
            offset: 4,
            size: 4,
          }}
          sm={{
            offset: 3,
            size: 6,
          }}
          xs={{
            offset: 2,
            size: 8,
          }}
          className="mt-3"
        >
          {singleRecord ? (
            <Card>
              <CardImg
                top
                width="100%"
                src={singleRecord.thumbnailUrl}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h4 className="text-dark">{singleRecord.title}</h4>
                </CardTitle>
                <a href={singleRecord.url}>
                  <CardText>{singleRecord.url}</CardText>
                </a>
              </CardBody>
              <HomeButton />
            </Card>
          ) : (
            <>
              <h4>No Record Found !</h4>
              <HomeButton />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SingleRecord;
