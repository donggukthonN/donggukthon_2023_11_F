import MenuBar from "../../components/common/MenuBar";
import { storageState } from "../../stores/storage-state";
import { 
  Container
} from './styled';
import { useRecoilState } from "recoil";

const MyPage = () => {
  const [page, setPage] = useRecoilState(storageState);
  return(
    <Container style={{backgroundColor: '#FFF6D4'}}>
      <MenuBar/>
      
    </Container>
  );
};

export default MyPage;