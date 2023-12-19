import MenuBar from "../../components/common/MenuBar";
import { 
  Container,
  ListContainer
} from './styled';
import { useRecoilState } from "recoil";
import { storageState } from "../../stores/storage-state";

const MyPage = () => {
  const [page, setPage] = useRecoilState(storageState);
  return(
    <Container style={{backgroundColor: '#FFF6D4'}}>
      <MenuBar/>
      <ListContainer>

      </ListContainer>
    </Container>
  );
};

export default MyPage;