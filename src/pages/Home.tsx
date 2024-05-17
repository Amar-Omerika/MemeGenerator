import MainContentArea from '../components/MainContentArea'
import SideMenu from '../components/SideMenu'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row">
      <SideMenu />
      <MainContentArea />
    </div>
  )
}

export default Home
