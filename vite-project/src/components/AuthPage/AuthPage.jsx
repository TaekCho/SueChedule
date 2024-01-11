export default function AuthPage() {
  return (
    <div className="flex m-auto mt-20 justify-center bg-grey-600 p-20 border-solid border-4 border-sky-200">
      <img src="" alt="" />
      <section className="flex flex-col">
        <h1 className="text-center text-4xl font-extrabold">PassCode</h1>
        <form
          action=""
          method="get"
          className="border-solid border-4 border-sky-100 p-4 m-4"
        >
          <label htmlFor="passcode">손 처음 잡은날: </label>
          <input
            type="text"
            name="passcode"
            id="passcode"
            placeholder="When was it?"
            className=""
          />
        </form>
      </section>
    </div>
  );
}
