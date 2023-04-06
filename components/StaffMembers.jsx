import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Card,
} from "@mui/material";

const staff = [
  {
    id: 1,
    picture: "https://example.com/avatar1.png",
    name: "John Smith",
    position: "CEO",
  },
  {
    id: 2,
    picture: "https://example.com/avatar2.png",
    name: "Jane Doe",
    position: "CTO",
  },
  {
    id: 1,
    picture: "https://example.com/avatar1.png",
    name: "John Smith",
    position: "CEO",
  },
  {
    id: 2,
    picture: "https://example.com/avatar2.png",
    name: "Jane Doe",
    position: "CTO",
  },
  {
    id: 1,
    picture: "https://example.com/avatar1.png",
    name: "John Smith",
    position: "CEO",
  },
  {
    id: 2,
    picture: "https://example.com/avatar2.png",
    name: "Jane Doe",
    position: "CTO",
  },
];

export function StaffMembers({ team }) {
  const chunkedStaff = staff.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        direction: "row",
        padding: "20px",
        margin: "16px",
      }}
    >
      <div>
        <p>{team}</p>
        <Grid container spacing={2}>
          {chunkedStaff.map((chunk, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ padding: "10px" }}>
              <List>
                {chunk.map((member) => (
                  <ListItem key={member.id}>
                    <ListItemAvatar>
                      <Avatar src={member.picture} alt={member.name} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={member.name}
                      secondary={member.position}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    </Card>
  );
}
