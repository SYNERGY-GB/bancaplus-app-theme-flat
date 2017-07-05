export var customize = (metadata : Megazord.ContainerScreenList) : void => {
  //Default customization of metadata (does nothing).
  metadata['dashboard.dashboard']['params']['modalAnimation'] = 'scale-out';

  //templates
    //flat
    metadata['dashboard.dashboard']['template'] = 'dashboard.html';
    metadata['appMenu.summary']['template'] = 'financial-summary.html';
    metadata['appMenu.instrumentDetail']['template'] = 'instrument-detail.html';
    metadata['dashboard.login']['template'] = 'login.html';
    metadata['appMenu.p2pTransfer']['template'] = 'p2p-transfer.html';
    metadata['appMenu.transferAmount']['template'] = 'transfer-amount.html';
    metadata['appMenu.transferConfirm']['template'] = 'transfer-confirm.html';
    metadata['appMenu.transferResult']['template'] = 'transfer-result.html';
    metadata['appMenu.transferSelection']['template'] = 'transfer-selection.html';
    metadata['appMenu.transfer']['template'] = 'transfer.html';

    metadata['appMenu.summary']['params']['arrow'] = 'ion-arrow-right-b'

  //customize.json
  
}

//End of custom.ts