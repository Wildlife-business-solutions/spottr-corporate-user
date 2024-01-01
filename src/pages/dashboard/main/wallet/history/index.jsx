import React from 'react'
import HistoryDetails from './HistoryDetails'
import { HistoryDiv } from './style'
import WalletBox from './WalletBox'

export default function History({icon,walletName,walletAmount,currency}) {
    return (
        <HistoryDiv>
            <WalletBox currency={currency} icon={icon} walletName={walletName} walletAmount={walletAmount} />
            <HistoryDetails />
        </HistoryDiv>
    )
}
