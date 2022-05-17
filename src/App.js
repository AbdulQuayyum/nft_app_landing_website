
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using Soft-NFTs Marketplace."
        showBtn
        mockupImg={assets.nft01}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Soft-NFTs NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.nft02}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="SoftNFTs is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.nft03}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.nft04}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className="bold">Alao Abdul -Quayyum</span>
        </p>
      </div>
    </>
  );
}

export default App;
