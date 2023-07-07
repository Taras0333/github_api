import axios from 'axios';
import { REPO_PATH } from '../utilities/const';

export const getRepositoriesList = () => {
  const res = axios.get(REPO_PATH);
  return res;
};
