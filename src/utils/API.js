import axios from "axios";

export default {
    wikiSearch: function (term) {
        return axios.get("https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
            term +
            "&limit=1&format=json&origin=*")
    }

}