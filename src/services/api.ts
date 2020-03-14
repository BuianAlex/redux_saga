import axios from 'axios';
import { API_HOST } from '../config';

axios.defaults.baseURL = API_HOST;

export default class API {
  static getAllPeople() {
    return axios.get(`/people/`);
  }
}
