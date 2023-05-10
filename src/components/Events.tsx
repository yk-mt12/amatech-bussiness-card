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
            <div className="event-card" key={event.id}>
              <a href={event.link} className="event-card__link">
                <div className="event-card__title">{event.title}</div>
                <div className="event-card__date">{event.date}</div>
              </a>
            </div>
          ))}
          <p className="event-more-card">
            <a href="#">
              もっと見る
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
