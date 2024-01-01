import React, {useState} from 'react'
import depositIcon from  'assets/deposit.png'
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import { TableRowDiv, TableDiv, TransactionDiv } from '../style'
import { useAdminModalContext } from "context/AdminModalContext";
import Transactionstatus from './transactionstatus'

export default function Transaction({activity, id, user, amount, date}) {
    const { showmodal, setShowModal } = useAdminModalContext();

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const [trxnStatus, setTrxnStatus] = useState({})

    const handleUserTransactionStatus = (id) => {
        setTrxnStatus(activity.transactions.find(trxn => trxn._id === id))
    }

    console.log(trxnStatus)

    return (
        <>
            <Transactionstatus show={showmodal} close={handleCloseModal}/>
            <TransactionDiv onClick={() => handleUserTransactionStatus(id)}>

                <div style={{ overflowX: 'auto' }} onClick={() => setShowModal(true)}>
                    <TableDiv>
                        <tbody>
                            <TableRowDiv bg="#fff">
                                <td><img src={depositIcon} alt='dep' /></td>
                                <td className="tdstyle">
                                    <SpottrP fw="bold">You Deposited</SpottrP>
                                    <small style={{ fontSize: '10px', color: '#929AA7' }}>cash</small>
                                </td>
                                <td className="tdstyle">
                                    <SpottrP fw="bold">@{user}</SpottrP>
                                    <small style={{ fontSize: '10px', color: '#929AA7' }}>Username:</small>
                                </td>
                                <td className="tdstyle">
                                    <SpottrP fw="bold">{id}</SpottrP>
                                    <small style={{ fontSize: '10px', color: '#929AA7' }}>Transaction ID:</small>
                                </td>
                                <td className="tdstyle">
                                    <SpottrP  fw="bold" style={{ color: '#39B54A', fontSize: '14px' }}>NGN{amount}</SpottrP>
                                    <small style={{ fontSize: '10px', color: '#929AA7'}}>{date.split("T")[0]}</small>
                                </td>
                            </TableRowDiv>
                        </tbody>

                    </TableDiv>
                </div>
            </TransactionDiv>
        </>
    )
}
