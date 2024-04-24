import Button from "../components/UI/Button/Button";
import ControlGroup from "../components/UI/Controls/form-control";

function Register() {
  return (
    <form className={`flex flex-col gap-2`}>
      <ControlGroup>
        <ControlGroup.Label htmlFor="full-name">
          Full Name
        </ControlGroup.Label>
        <ControlGroup.Input id={"full-name"} name={"name"} type={"text"} />
      </ControlGroup>
      <ControlGroup>
        <ControlGroup.Label htmlFor={"email"}>
          Email
        </ControlGroup.Label>
        <ControlGroup.Input id={"email"} name={"email"} type={"email"} />
      </ControlGroup>
      <ControlGroup>
        <ControlGroup.Label htmlFor={"password"}>
          Password
        </ControlGroup.Label>
        <ControlGroup.Input id={"password"} name={"password"} type={"password"} />
      </ControlGroup>
      <ControlGroup>
        <ControlGroup.Label htmlFor={"confirm-password"}>
          Confirm Password
        </ControlGroup.Label>
        <ControlGroup.Input id={"confirm-password"} type={"password"} />
      </ControlGroup>
      <div className="w-full flex justify-center mt-5">
        <Button type={"submit"} size="md">Sign Up</Button>
      </div>
    </form>
  );
}

export default Register;
