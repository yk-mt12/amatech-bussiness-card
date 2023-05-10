import { Card, CardActionArea, CardContent, Link, Typography } from "@mui/material";

const eventsData = [
  {
    id: 1,
    date: "2023/03/25",
    title: "CAC合同アイディアソン",
    link: "https://www.sankei.com/pressrelease/prtimes/BD5DWRJRHNOF3ECZHUPCHO5KJQ/",
  },
  {
    id: 2,
    date: "2023/04/14",
    title: "エンジニア くるかこやんか開催",
    link: "https://amatech1006.connpass.com/event/280399/",
  },
  {
    id: 3,
    date: "2023/04/18",
    title: "ベガコーポレーションコラボ勉強会 ",
    link: "#",
  },
];

export const Events = () => {
  return (
    <section className="section_events">
      <h2 className="interest">Events</h2>
      <div className="event-container">
        <div className="section__events__card">
          {eventsData.map((event) => (
            <Card key={event.id} sx={{ maxWidth: 275, mx: 1, my: 2 }}>
              <CardActionArea href={event.link} target="_blank">
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {event.date}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {event.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent sx={{ textAlign: "right"}}>
                <Link href={event.link} target="_blank">
                  もっと見る
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
