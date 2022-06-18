import { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { getAllRecords } from "../actions/records";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Listing = () => {
  const dispatch = useDispatch();
  const { allRecords, loading } = useSelector((state) => {
    return {
      allRecords: state.records.allRecords,
      loading: state.records.loading,
    };
  });
  useEffect(() => {
    dispatch(getAllRecords());
  }, []);
  return loading ? (
    <Container>
      <Row>
        <Col>
          <h1>Data Fetching Please Wait...</h1>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col className="text-center mt-3">
          <h1>Dummy Records</h1>
        </Col>
      </Row>
      <Row>
        {allRecords &&
          allRecords.length > 0 &&
          allRecords.map(
            (data, index) =>
              index < 10 && (
                <Col
                  lg={{
                    offset: index == 8 && 3,
                    size: 3,
                  }}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mt-3"
                  key={index}
                >
                  <Link
                    to={`record/${data.id}`}
                    className="text-decoration-none"
                  >
                    <Card className="h-100">
                      <CardBody>
                        <CardTitle>
                          <h4 className="text-dark">{data.title}</h4>
                        </CardTitle>
                        <CardText>{data.url}</CardText>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              )
          )}
      </Row>
    </Container>
  );
};

export default Listing;
