export default function ScheduleTable() {
  let style =
    "h-full w-full bg-orange-500 m-auto p-8 transition ease-in-out hover:ease-in hover:col-span-2";

  let verticalTransitionStyle =
    "min-h-4064 h-full w-full bg-orange-500 m-auto p-8 transition ease-in-out hover:ease-in hover:row-span-2";

  return (
    <section>
      <div className="grid sm:grid-cols-4 gap-8 text-center h-96">
        <div className={style}>01</div>
        <div className={style}>02</div>
        <div className={style}>03</div>
        <div className={verticalTransitionStyle}>04</div>
        <div className={style}>05</div>
        <div className={style}>06</div>
        <div className={style}>07</div>
      </div>
    </section>
  );
}
