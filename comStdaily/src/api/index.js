import { axiosget, axiosconfig } from "./axios"

const getHome = axiosget("/menu");
const ConfigHome = axiosconfig({
  method: "get",
  url: "/menu"
});

export {
  getHome,
  ConfigHome
}
