export default function ScheduleTable() {
  let style = "h-8 w-16 bg-orange-500 m-auto p-8";

  return (
    <section>
      <div className="grid grid-cols-4 gap-8">
        <div className={style}>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
      </div>
    </section>
  );
}
