import { useSession } from 'next-auth/client';
import React, { ReactChildren, ReactElement } from 'react';

import AdminLogin from '../../components/AdminLogin';
// import { Web3Context } from '../../contexts/web3Context';
import styles from './styles.module.css';

const AdminLayout = ({
  children,
}: {
  children: ReactChildren;
}): ReactElement => {
  const [session] = useSession();
  // const [modalOpen, setModalOpen] = useState(false);
  // const { provider, network } = useContext(Web3Context);
  // useEffect(() => {
  //   console.warn(provider, network);
  //   setModalOpen(provider && network !== parseInt(process.env.CHAIN_ID, 10));
  // }, [provider, network]);

  return (
    <main className={styles.admin}>
      {/* <Modal visible={modalOpen} title="Wrong Network" footer={null}>
          <Button
            onClick={async () => {
              await provider.send('wallet_addEthereumChain', [
                chainArgs[process.env.CHAIN_ID],
              ]);
            }}
          >
            Switch Network
          </Button>
        </Modal> */}

      {!session ? <AdminLogin /> : children}
    </main>
  );
};

export default AdminLayout;
