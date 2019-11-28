import React from 'react'

import { NavigationScreen, NavigationProps, UIServices } from 'src/ui/types'
import SyncScreenLogic, { State, Event, SyncScreenDependencies } from './logic'
import SetupStage from '../../components/sync-setup-stage'
import LoadingStage from '../../components/sync-loading-stage'
import SuccessStage from '../../components/sync-success-stage'
import ScanQRStage from '../../components/sync-scan-qr-stage'

export default class SyncScreen extends NavigationScreen<
    SyncScreenDependencies,
    State,
    Event
> {
    constructor(props: SyncScreenDependencies) {
        super(props, { logic: new SyncScreenLogic(props) })
        console.log('sync screen constructed')
    }

    render() {
        switch (this.state.status) {
            case 'scanning':
                return (
                    <ScanQRStage
                        onQRRead={qrEvent =>
                            this.processEvent('doSync', { qrEvent })
                        }
                        onSkipBtnPress={() => this.processEvent('skip', {})}
                    />
                )
            case 'syncing':
                return <LoadingStage />
            case 'success':
                return (
                    <SuccessStage
                        onBtnPress={() =>
                            this.processEvent('confirmSuccess', {})
                        }
                    />
                )
            case 'failure':
                throw new Error(
                    `No UI implemented yet for initial sync failures`,
                )
            case 'setup':
                return (
                    <SetupStage
                        onBtnPress={() =>
                            this.processEvent('startScanning', {})
                        }
                    />
                )
            default:
                throw new Error(
                    `Unknown sync screen status: ${this.state.status}`,
                )
        }
    }
}
