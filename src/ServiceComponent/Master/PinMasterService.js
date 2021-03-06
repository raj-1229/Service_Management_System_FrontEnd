import axios from "axios";

const addPinDetails_URL = "/addPinDetails";
const showPinDetails_URL = "/showAllPin";
const updatePinDetails_URL = "/updatePinDetails";
const deletePinDetails_URL = "/deletePinDetails";
class PinMasterService{

   
    addPinDetail(pin)
    {
        return axios.post(addPinDetails_URL,pin);
    }

    showPinDetail()
    {
        return axios.get(showPinDetails_URL);
    }

    updatePinDetail(pin)
    {
        return axios.put(updatePinDetails_URL,pin);
    }

    getPinById(id)
    {
        return axios.get(showPinDetails_URL+'/'+id);
    }

    deletePinDetails_(pin)
    {
        return axios.delete(deletePinDetails_URL,{ datasource: pin});
    }
   
}
export default new PinMasterService();