import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Space, Table, Tag, Popconfirm } from "antd";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import { customMessage } from "../../commons/CustomMessage/CustomMessage";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const { Column } = Table;

const TeamCard = ({ team }) => {
  // States
  const [openCard, setOpenCard] = useState(false);
  const [refresh, setRefresh] = useState(false);
  // Togglers
  const toggleCard = () => {
    setOpenCard((prevState) => !prevState);
    setRefresh(!refresh);
  };
  return (
    <Grid
      item
      key={team.key}
      xs={12}
      sm={12}
      md={openCard ? 12 : 6}
      lg={openCard ? 12 : 4}
    >
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          style={{
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Tag
              style={{
                borderRadius: 25,
                color: "#565659",
                backgroundColor: "#EBCDFF",
                borderColor: "#EBCDFF",
                maxHeight: "24px",
              }}
            >
              <Typography variant="subtitle2">{team.address}</Typography>
            </Tag>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={toggleCard}>
                {openCard ? "Cerrar" : "Ver Equipo"}
              </Button>
              <Tooltip placement="top" title="Editar">
                <IconButton
                  aria-label="edit-team"
                  onClick={() => console.log(team)}
                >
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          {openCard ? (
            <>
              <Typography variant="h6">Jefes:</Typography>
              <Table
                style={{
                  border: "2px solid #CCE5FF",
                  borderColor: "#CCE5FF",
                  borderRadius: 5,
                }}
                dataSource={[team]}
              >
                <Column title="Nombre" dataIndex="firstName" key="firstName" />
                <Column title="Apellido" dataIndex="lastName" key="lastName" />
                <Column title="Puesto" dataIndex="age" key="age" />
                <Column title="Categoría" dataIndex="address" key="address" />
                <Column
                  title="Tags"
                  dataIndex="tags"
                  key="tags"
                  render={(team) => (
                    <>
                      {team.map((tag) => (
                        <Tag color="#FB9B14" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </>
                  )}
                />
                <Column
                  title="Acción"
                  key="action"
                  render={(_, record) => (
                    <Space size="middle">
                      <Popconfirm
                        title="Quitar del Equipo"
                        description="Seguro que quiere quitar a este Usuario?"
                        onConfirm={() => customMessage("info", "Sí")}
                        onCancel={() => customMessage("info", "No")}
                        okText="Sí"
                        cancelText="No"
                      >
                        <a>Quitar</a>
                      </Popconfirm>
                    </Space>
                  )}
                />
              </Table>
              <Typography variant="h6">Coordinadores:</Typography>
              <Table
                style={{
                  border: "2px solid #CCE5FF",
                  borderColor: "#CCE5FF",
                  borderRadius: 5,
                }}
                dataSource={[team]}
              >
                <Column title="Nombre" dataIndex="firstName" key="firstName" />
                <Column title="Apellido" dataIndex="lastName" key="lastName" />
                <Column title="Puesto" dataIndex="age" key="age" />
                <Column title="Categoría" dataIndex="address" key="address" />
                <Column
                  title="Tags"
                  dataIndex="tags"
                  key="tags"
                  render={(team) => (
                    <>
                      {team.map((tag) => (
                        <Tag color="#FB9B14" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </>
                  )}
                />
                <Column
                  title="Acción"
                  key="action"
                  render={(_, record) => (
                    <Space size="middle">
                      <Popconfirm
                        title="Quitar del Equipo"
                        description="Seguro que quiere quitar a este Usuario?"
                        onConfirm={() => customMessage("info", "Sí")}
                        onCancel={() => customMessage("info", "No")}
                        okText="Sí"
                        cancelText="No"
                      >
                        <a>Quitar</a>
                      </Popconfirm>
                    </Space>
                  )}
                />
              </Table>
              <Typography variant="h6">Integrantes:</Typography>
              <Table
                style={{
                  border: "2px solid #CCE5FF",
                  borderColor: "#CCE5FF",
                  borderRadius: 5,
                }}
                dataSource={[team]}
              >
                <Column title="Nombre" dataIndex="firstName" key="firstName" />
                <Column title="Apellido" dataIndex="lastName" key="lastName" />
                <Column title="Puesto" dataIndex="age" key="age" />
                <Column title="Categoría" dataIndex="address" key="address" />
                <Column
                  title="Tags"
                  dataIndex="tags"
                  key="tags"
                  render={(team) => (
                    <>
                      {team.map((tag) => (
                        <Tag color="#FB9B14" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </>
                  )}
                />
                <Column
                  title="Acción"
                  key="action"
                  render={(_, record) => (
                    <Space size="middle">
                      <Popconfirm
                        title="Quitar del Equipo"
                        description="Seguro que quiere quitar a este Usuario?"
                        onConfirm={() => customMessage("info", "Sí")}
                        onCancel={() => customMessage("info", "No")}
                        okText="Sí"
                        cancelText="No"
                      >
                        <a>Quitar</a>
                      </Popconfirm>
                    </Space>
                  )}
                />
              </Table>
            </>
          ) : (
            <Image
              src="/team.jpg"
              alt="default-team-img"
              width={350}
              height={200}
              priority
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamCard;
