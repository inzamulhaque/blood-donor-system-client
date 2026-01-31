import { Col, Divider, Flex, Row } from "antd";
import {
  useGetAdminCountQuery,
  useGetDonorAndFinderCountQuery,
  useGetDonorByBloodGroupQuery,
} from "../../redux/features/admin/adminApi";
import Loader from "../../components/shared/Loader";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const AdminDashboard = () => {
  const user = useAppSelector(useCurrentUser);
  const skip =
    user?.role === "super-admin" ? false : user?.role === "admin" ? true : true;

  const { data: donorAndFinderCount, isLoading } =
    useGetDonorAndFinderCountQuery({});
  const { data: donorByBloodGroup } = useGetDonorByBloodGroupQuery({});
  const { data: adminCount } = useGetAdminCountQuery({ skip });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>
        <Divider />

        <Row gutter={[20, 20]}>
          {user?.role === "super-admin" && (
            <Col xs={24} md={user?.role === "super-admin" ? 8 : 12}>
              <div
                style={{
                  background: "royalblue",
                  color: "white",
                  padding: "50px 20px",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <Flex justify="space-between" align="center">
                  <h3>Total Admin</h3>
                  <h3>{adminCount?.data?.totalAdmin || 0}</h3>
                </Flex>
              </div>
            </Col>
          )}

          <Col xs={24} md={user?.role === "super-admin" ? 8 : 12}>
            <div
              style={{
                background: "red",
                color: "white",
                padding: "50px 20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total Donor</h3>
                <h3>{donorAndFinderCount?.data?.totalDonor || 0}</h3>
              </Flex>
            </div>
          </Col>

          <Col xs={24} md={user?.role === "super-admin" ? 8 : 12}>
            <div
              style={{
                background: "yellow",
                color: "black",
                padding: "50px 20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total Finder</h3>
                <h3>{donorAndFinderCount?.data?.totalFinder || 0}</h3>
              </Flex>
            </div>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[20, 20]}>
          <Col xs={12} md={6}>
            <div
              style={{
                background: "#1E3A8A",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["A+"] || 0}</h3>
              </Flex>

              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                A+
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#6D28D9",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["A-"] || 0}</h3>
              </Flex>
              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                A-
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#047857",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["B+"] || 0}</h3>
              </Flex>

              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                B+
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#0F766E",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["B-"] || 0}</h3>
              </Flex>
              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                B-
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#991B1B",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["AB+"] || 0}</h3>
              </Flex>

              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                AB+
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#1F2937",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["AB-"] || 0}</h3>
              </Flex>
              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                AB-
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#C2410C",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["O+"] || 0}</h3>
              </Flex>

              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                O+
              </h2>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                background: "#312E81",
                color: "white",
                padding: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Total</h3>
                <h3>{donorByBloodGroup?.data["O-"] || 0}</h3>
              </Flex>
              <Divider />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                O-
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminDashboard;
