export interface SiteMapNode {
    name: string;
    cargoLink?: string;
    routerLink?: string;
    visibility: string[];
    new?: boolean;
    children?: SiteMapNode[];
}

export const siteMap: SiteMapNode[] = [
    // ადმინისტრაცია
    {
        name: 'Administration',
        visibility: ['All'],
        children: [
            { name: 'UltimateLogin', cargoLink: 'Account/ExternalLogin', visibility: ['Master'] },
            {
                name: 'Registration',
                routerLink: 'administration/client-registration',
                new: true,
                visibility: ['Satvirtodeveloper', 'adminsatvirto', 'MainRolertk', 'rolertk'],
            },
            {
                name: 'MakeRailwayOrganization',
                cargoLink: 'Account/MakeRailwayOrganization',
                visibility: ['Satvirtodeveloper', 'adminsatvirto', 'MainRolertk', 'Maneger'],
            },
            {
                name: 'ClientAdministration',
                cargoLink: 'Account/ClientAdministration',
                visibility: ['Satvirtodeveloper', 'adminsatvirto', 'rolertk'],
            },
            {
                name: 'ClientAdministration',
                cargoLink: 'Account/CustomerClientAdministration',
                visibility: ['FullAccess', 'ClientManager'],
            },
            {
                name: 'Instruction',
                cargoLink: 'Information/Instruction',
                visibility: ['FullAccess', 'LimitedAccess', 'Smgs', 'Memo', 'Clamp'],
            },
            { name: 'UserManager', cargoLink: 'Account/ManageUser', visibility: ['Satvirtodeveloper', 'adminsatvirto'] },
            { name: 'UserClampManager', cargoLink: 'Account/ManageClampUser', visibility: ['MainRolertk', 'Satvirtodeveloper'] },
            { name: 'UserManager', cargoLink: 'Account/FullAccessManageUser', visibility: ['FullAccess', 'ClientManager'] },
            {
                name: 'ClientCorrection',
                cargoLink: 'ClientDetails/UpdateClient',
                visibility: ['Satvirtodeveloper', 'adminsatvirto', 'MainRolertk', 'rolertk', 'FullAccess', 'ClientManager'],
            },
            {
                name: 'ClientRegistration',
                visibility: ['FullAccess', 'Smgs'],
                children: [
                    {
                        name: 'RegistrationClient',
                        routerLink: 'ClientRegistration',
                        new: true,
                        visibility: ['FullAccess', 'Smgs'],
                    },
                    {
                        name: 'ClientRegistrationHistory',
                        routerLink: 'ClientRegistration/list',
                        new: true,
                        visibility: ['FullAccess', 'Smgs'],
                    },
                ],
            }, 
            { name: 'ChangePassword', cargoLink: 'Account/Manage', visibility: ['All'] },
        ],
    },
    // განაცხადი
    {
        name: 'Application',
        visibility: [
            'FullAccess',
            'LimitedAccess',
            'adminsatvirto',
            'rolertk',
            'Maneger',
            'Satvirtodeveloper',
            'RoleStation',
            'RoleSattistics',
            'modzraoba',
            'MainRolertk',
        ],
        children: [
            {
                name: 'NewApplication',
                visibility: ['FullAccess', 'LimitedAccess', 'adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper', 'RoleStation'],
                children: [
                    {
                        name: 'Templates',
                        cargoLink: 'NewApplication/Shablons',
                        visibility: ['FullAccess', 'LimitedAccess', 'Satvirtodeveloper'],
                    },
                    { name: 'VagonContainer', cargoLink: 'NewApplication/Transportation', visibility: ['All'] },
                    { name: 'SectionsTransportation', cargoLink: 'NewApplication/RefSection', visibility: ['All'] },
                    { name: 'TransportationOfEmptyCarriage', cargoLink: 'NewApplication/EmptyTransportation', visibility: ['All'] },
                    {
                        name: 'ServiceStationContract',
                        cargoLink: 'StationActivation/ServiceStationContract',
                        visibility: ['FullAccess', 'LimitedAccess', 'Satvirtodeveloper', 'adminsatvirto', 'rolertk'],
                    },
                ],
            },
            {
                name: 'LetterOfGuarantee',
                cargoLink: 'Application/LetterOfGuarantee',
                visibility: ['adminsatvirto', 'MainRolertk', 'Satvirtodeveloper'],
            },
            {
                name: 'Activation',
                visibility: ['FullAccess', 'LimitedAccess', 'adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper', 'modzraoba'],
                children: [
                    {
                        name: 'StationServiceActivation',
                        cargoLink: 'Activation/ActivationStationService',
                        visibility: ['FullAccess', 'LimitedAccess', 'adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper'],
                    },
                    {
                        name: 'HoursOfServiceActivation',
                        cargoLink: 'Activation/ActivationStationService24Hour',
                        visibility: ['FullAccess', 'LimitedAccess', 'adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper'],
                    },
                    { name: 'RailwayConfirm', cargoLink: 'Activation/ActivatioRailway', visibility: ['modzraoba', 'rolertk', 'Maneger'] },
                    {
                        name: 'ConfrimCustomer',
                        cargoLink: 'Activation/ClientConfirm',
                        visibility: ['FullAccess', 'LimitedAccess', 'adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper'],
                    },
                    {
                        name: 'VagCountCorrectActivate',
                        cargoLink: 'Activation/VagCountCorrectActivate',
                        visibility: ['rolertk', 'Satvirtodeveloper', 'modzraoba'],
                    },
                ],
            },
            {
                name: 'Requirements',
                visibility: [
                    'adminsatvirto',
                    'rolertk',
                    'Maneger',
                    'Satvirtodeveloper',
                    'RoleStation',
                    'MainRolertk',
                    'modzraoba',
                    'RoleSattistics',
                    'FullAccess',
                ],
                children: [
                    {
                        name: 'RequestToSend',
                        cargoLink: 'Requirements/RequestToSend',
                        visibility: ['adminsatvirto', 'rolertk', 'Satvirtodeveloper', 'MainRolertk', 'FullAccess'],
                    },
                    {
                        name: 'ViewRequirements',
                        cargoLink: 'Requirements/ViewRequirements',
                        visibility: [
                            'adminsatvirto',
                            'rolertk',
                            'Maneger',
                            'Satvirtodeveloper',
                            'RoleStation',
                            'MainRolertk',
                            'modzraoba',
                            'RoleSattistics',
                        ],
                    },
                    {
                        name: 'TransmissionRequirements',
                        cargoLink: 'Requirements/TransmissionRequirements',
                        visibility: ['RoleSattistics', 'Satvirtodeveloper'],
                    },
                ],
            },
            { name: 'ActiveAds', cargoLink: 'Application/ActiveAds', visibility: ['Satvirtodeveloper', 'RoleStation'] },
            {
                name: 'ShippingAssignment',
                visibility: [
                    'adminsatvirto',
                    'rolertk',
                    'Maneger',
                    'Satvirtodeveloper',
                    'RoleStation',
                    'MainRolertk',
                    'modzraoba',
                    'RoleSattistics',
                ],
                children: [
                    {
                        name: 'ViewPrint',
                        cargoLink: 'ShippingAssignment/ViewPrint',
                        visibility: [
                            'adminsatvirto',
                            'rolertk',
                            'Maneger',
                            'Satvirtodeveloper',
                            'RoleStation',
                            'MainRolertk',
                            'modzraoba',
                            'RoleSattistics',
                        ],
                    },
                    {
                        name: 'CarriageCorrection',
                        cargoLink: 'NewApplication/CarriageCorrection',
                        visibility: ['rolertk', 'Satvirtodeveloper', 'adminsatvirto', 'Maneger'],
                    },
                    {
                        name: 'CorrectionRefSections',
                        cargoLink: 'NewApplication/CorrectionRefSection',
                        visibility: ['rolertk', 'Satvirtodeveloper', 'adminsatvirto', 'Maneger'],
                    },
                    {
                        name: 'CorrectionEmptyWagons',
                        cargoLink: 'NewApplication/CorrectionEmptyWagons',
                        visibility: ['rolertk', 'Satvirtodeveloper', 'adminsatvirto', 'Maneger'],
                    },
                    {
                        name: 'AdjustedTasksViews',
                        cargoLink: 'ShippingAssignment/AdjustedTasksViews',
                        visibility: [
                            'adminsatvirto',
                            'rolertk',
                            'Maneger',
                            'Satvirtodeveloper',
                            'RoleStation',
                            'MainRolertk',
                            'modzraoba',
                            'RoleSattistics',
                        ],
                    },
                ],
            },
            {
                name: 'CloseTransportationTasks',
                cargoLink: 'Application/CloseTransportationTasks',
                visibility: ['adminsatvirto', 'MainRolertk', 'Satvirtodeveloper'],
            },
            {
                name: 'Invoice',
                visibility: ['adminsatvirto', 'rolertk', 'Maneger', 'Satvirtodeveloper', 'RoleStation', 'MainRolertk'],
                children: [
                    {
                        name: 'ViewPrintInvoice',
                        cargoLink: 'Invoice/ViewPrintInvoice',
                        visibility: ['adminsatvirto', 'rolertk', 'Satvirtodeveloper', 'MainRolertk', 'Maneger'],
                    },
                    {
                        name: 'ViewStationServiceInvoice',
                        cargoLink: 'NewApplication/CarriageCorrection',
                        visibility: ['adminsatvirto', 'rolertk', 'Satvirtodeveloper', 'MainRolertk', 'Maneger'],
                    },
                ],
            },
            {
                name: 'RailwayRejectedInvoices',
                cargoLink: 'Application/RailwayRejectedInvoices',
                visibility: [
                    'adminsatvirto',
                    'rolertk',
                    'Maneger',
                    'Satvirtodeveloper',
                    'RoleStation',
                    'MainRolertk',
                    'modzraoba',
                    'RoleSattistics',
                ],
            },
            { name: 'View', cargoLink: 'Application/ApplicationListView', visibility: ['All'] },
        ],
    },
    // ელექტრონული დოკუმენტები
    {
        name: 'ElectronicDocuments',
        visibility: [
            'FullAccess',
            'RoleStation',
            'Clamp',
            'Smgs',
            'Satvirtodeveloper',
            'adminsatvirto',
            'Memo',
            'RsUser',
            'RoleStationMemo',
        ],
        children: [
            {
                name: 'Smgs',
                visibility: ['Smgs', 'RoleStation', 'Clamp'],
                children: [
                    // { name: 'Template', routerLink: 'smgs/SMGStemplate', visibility: ['Smgs', 'RoleStation'] },
                    { name: 'SmgsNew', routerLink: 'smgs', new: true, visibility: ['Smgs', 'RoleStation'] },
                    { name: 'SmgsList', routerLink: 'smgs/list', new: true, visibility: ['Smgs', 'RoleStation', 'Clamp'] },
                    { name: 'SmgsDeclarations', routerLink: 'smgs/declarations', new: true, visibility: ['Smgs', 'RoleStation', 'Clamp'] },
                    { name: 'View', routerLink: 'smgs/list-all', new: true, visibility: ['Smgs', 'RoleStation', 'Clamp'] },
                ],
            },
            { name: 'ViewRS', cargoLink: 'Smgs/SMGSListRS', visibility: ['RsUser'] },
            {
                name: 'Delivery',
                visibility: ['FullAccess', 'Smgs'],
                children: [
                    { name: 'DeliveySign', routerLink: 'Delivery/Delivery', new: true, visibility: ['FullAccess', 'Smgs'] },
                    { name: 'View', routerLink: 'Delivery/DeliveryList', new: true, visibility: ['FullAccess', 'Smgs'] },
                    { name: 'WaggonLoading', cargoLink: 'DeliveryPublic/DeliveryWaggon', visibility: ['RoleStationMemo'] },
                ],
            },
            {
                name: 'AditionalCharge',
                visibility: ['FullAccess', 'Smgs'],
                children: [
                    { name: 'NewAditionalCharge', routerLink: 'AditionalCharge/Charge', new: true, visibility: ['FullAccess', 'Smgs'] },
                    { name: 'View', routerLink: 'AditionalCharge/ChargeList', new: true, visibility: ['FullAccess', 'Smgs'] },
                ],
            },         
            {
                name: 'ActHeader',
                visibility: ['FullAccess', 'Smgs'],
                children: [
                    { name: 'NewActHeader', routerLink: 'ActHeader/ActHeader', new: true, visibility: ['FullAccess', 'Smgs'] },
                    { name: 'View', routerLink: 'ActHeader/ActHeaderList', new: true, visibility: ['FullAccess', 'Smgs'] },
                ],
            },
            {
                name: 'TrustList',
                visibility: ['Smgs', 'RoleStation', 'Satvirtodeveloper', 'Memo'],
                children: [
                    { name: 'TrustUsers', cargoLink: 'Trust/TrustUsers', visibility: ['Satvirtodeveloper', 'RoleStation'] },
                    {
                        name: 'TrustList',
                        routerLink: 'TrustUsers/List',
                        new: true,
                        visibility: ['Smgs', 'RoleStation', 'Satvirtodeveloper', 'Memo'],
                    },
                ],
            },

            {
                name: 'SignatureCancelation',
                visibility: ['RoleStation','Requirementadmin', 'BillingRequirementAdmin', 'StationRequirementAdmin'],
                children: [
                    {
                        name: 'SignatureCancelationNew',
                        routerLink: 'SignatureCancelation',
                        new: true,
                        visibility: ['RoleStation', 'Requirementadmin','BillingRequirementAdmin', 'StationRequirementAdmin'],
                    },
                    {
                        name: 'SignatureCancelationList',
                        routerLink: 'SignatureCancelation/list',
                        new: true,
                        visibility: ['RoleStation', 'Requirementadmin','BillingRequirementAdmin', 'StationRequirementAdmin'],
                    },
                ],
            },
        ],
    },

    // კომერციული დოკუმენტები
    // {
    //     name: 'ComercialDocuments',
    //     visibility: [
    //         'FullAccess',
    //         'RoleStation', 
    //         'Smgs',
    //     ],
    //     children: [            
    //          { name: 'WaydocList', routerLink: 'WayDoc/list', new: true, visibility: ['FullAccess', 'RoleStation', 'Smgs'] },
    //     ]

    // },

    // ფინანსები
    {
        name: 'Finance',
        visibility: [
            'adminsatvirto',
            'rolertk',
            'Maneger',
            'Satvirtodeveloper',
            'RoleStation',
            'MainRolertk',
            'modzraoba',
            'RoleSattistics',
            'FullAccess',
            'LimitedAccess',
        ],
        children: [
            {
                name: 'Reports',
                visibility: [
                    'adminsatvirto',
                    'RoleSattistics',
                    'Satvirtodeveloper',
                    'Maneger',
                    'MainRolertk',
                    'rolertk',
                    'FullAccess',
                    'LimitedAccess',
                    'modzraoba',
                    'RoleStation',
                ],
                children: [
                    {
                        name: 'ReportHeidelberg',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=ReportHeidelberg',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'MontlyReports',
                        cargoLink: 'Report/MontlyReports',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'ReportFinanceByGoods',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=ReportFinanceByGoods',
                        visibility: ['Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'DailyReport',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=EverydayReport',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Refusal',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=uarebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger', 'modzraoba'],
                    },
                    { name: 'SgdsDasturebi', cargoLink: 'Reports/AllReportsManager.aspx?Report=SgdsDasturebi', visibility: ['modzraoba'] },
                    {
                        name: 'Thingscloseshippinginstructions',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=VinDaxura',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Depletedrequirements',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=Amocuruli_Motxovnebii',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'IndoorApplications',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=daxuruliganacxadebi',
                        visibility: [
                            'adminsatvirto',
                            'RoleSattistics',
                            'Satvirtodeveloper',
                            'Maneger',
                            'MainRolertk',
                            'rolertk',
                            'FullAccess',
                            'LimitedAccess',
                            'RoleStation',
                        ],
                    },
                    {
                        name: 'Deposit',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=daricxvebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Payments',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=gadaxdebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Guards',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=ganacxadebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Jointact',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=SaertoFormisAqtebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'DetailedAnalysis',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=Detaluri_analizi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger', 'FullAccess', 'LimitedAccess'],
                    },
                    {
                        name: 'OnlinePayments',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=OnlineGadaxdebi',
                        visibility: [
                            'adminsatvirto',
                            'RoleSattistics',
                            'Satvirtodeveloper',
                            'Maneger',
                            'MainRolertk',
                            'rolertk',
                            'RoleStation',
                        ],
                    },
                    {
                        name: 'Refrigeratorsectioncorrectaccruedfines',
                        cargoLink: 'Reports/ManagerAndStation.aspx?Report=RefCorrect_Jarima',
                        visibility: [
                            'adminsatvirto',
                            'RoleSattistics',
                            'Satvirtodeveloper',
                            'Maneger',
                            'MainRolertk',
                            'rolertk',
                            'RoleStation',
                        ],
                    },
                    {
                        name: 'Chargecard',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=DaricxvisBaratiNew',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Listoftraincarstostartupaferry',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=DaricxvisBarati_VagonebitNew',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'CustomerTransactionCard',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=klientisbarati',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger', 'FullAccess', 'LimitedAccess'],
                    },
                    {
                        name: 'CustomerSimplifiedCard',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=AllKlentisBarati',
                        visibility: ['FullAccess', 'LimitedAccess'],
                    },
                    {
                        name: 'Totalrevenues',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=SaertoShemosavlebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Applicationtransportationordersalbums',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=GanacxadiViewAll',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Assignedrequirementsviews',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=MotxovnebiSrulad',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Revenuesfromfreighttransportation',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=SaertoShemosavlebiMix',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Revenuesfromfreighttransportationcorrect',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=ReportSaertoShemosavlebiKoreqtireba',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Sendrequestwagonsbydate',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=VagonebzeMotxovna_Saatebit',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'EveryDayReportRequiredVagonsKont',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=EveryDayReportRequiredVagonsKont',
                        visibility: ['RoleSattistics', 'Satvirtodeveloper', 'modzraoba', 'Maneger'],
                    },
                    {
                        name: 'Requiredwagonscontainerspoint',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=Motxovnebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Wagonsrequesteddaysmonth',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=VagRequsetByMonthandType',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Requiredwagonscontainersaccordingstations',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=VagRequsetSumByType',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Theinitialrequirements',
                        cargoLink: 'Reports/ManagerAndStation.aspx?Report=NEWTavdapirveliMotxovnebi',
                        visibility: [
                            'adminsatvirto',
                            'RoleSattistics',
                            'Satvirtodeveloper',
                            'Maneger',
                            'MainRolertk',
                            'rolertk',
                            'RoleStation',
                        ],
                    },
                    {
                        name: 'Transportingscrapwagonsreport',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=Report_JartiTDatvirtuliVagonebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'PeriodicReport',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=PerioduliAngarishi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'ShipmentsclosuresTaskAnalysis',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=Kvela_dasaxuri_ganacxadebi_damattanxebit',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Wagonsamorethan24stationsinlatency',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=Report_ForRevizor',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Wagonsamorethan24stationsinlatencyafterload',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=Report_ForRevizor_24_MetiDatvirtvebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Requiredwagonscontainerspointssum',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=MotxovniliVagonebiKont',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Invoicesandactivatedbycenter',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=CentrisMierGaketebuliDavalebebi',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Forwarderandnonresidentcustomers',
                        cargoLink: 'Reports/AllReportsManager.aspx?Report=ararezidenti_eqspetitors',
                        visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
                    },
                    {
                        name: 'Commercialstationsbyoperations',
                        cargoLink: 'Reports/AllReportsCenter.aspx?Report=Report_KomOperations_ForStations',
                        visibility: [
                            'adminsatvirto',
                            'RoleSattistics',
                            'Satvirtodeveloper',
                            'Maneger',
                            'MainRolertk',
                            'rolertk',
                            'RoleStation',
                        ],
                    },
                ],
            },
            {
                name: 'ModifiedClients',
                cargoLink: 'Reports/ManagerAndStation.aspx?Report=ModifiedClients',
                visibility: ['adminsatvirto', 'Satvirtodeveloper', 'Maneger', 'MainRolertk', 'rolertk'],
            },
            {
                name: 'UpdateDisputedDebtors',
                cargoLink: 'Finance/UpdateDisputedDebtors',
                visibility: ['adminsatvirto', 'RoleSattistics', 'Satvirtodeveloper', 'Maneger'],
            },
            {
                name: 'UserListo',
                cargoLink: 'ClientDetails/UserList',
                visibility: ['Satvirtodeveloper', 'MainRolertk', 'rolertk', 'RoleStation'],
            },
            { name: 'CheckClientsBalance', cargoLink: 'Finance/CheckClientsBalance', visibility: ['FullAccess', 'LimitedAccess'] },
            {
                name: 'CheckBalance',
                cargoLink: 'Finance/Finance',
                visibility: [
                    'adminsatvirto',
                    'rolertk',
                    'Maneger',
                    'Satvirtodeveloper',
                    'RoleStation',
                    'MainRolertk',
                    'modzraoba',
                    'RoleSattistics',
                    'FullAccess',
                    'LimitedAccess',
                ],
            },
            // {
            //     name: 'GeorgianTrans',
            //     routerLink: 'GeorgianTrans/import',
            //     new: true,
            //     visibility: ['FullAccess'],
            // },
        ],
    },
    // ინფორმაცია
    {
        name: 'Information',
        visibility: ['All'],
        children: [
            { name: 'Information1', cargoLink: 'Information/Information', visibility: ['FullAccess', 'LimitedAccess'] },
            { name: 'Help', cargoLink: 'Information/Help', visibility: ['All'] },
            { name: 'TariffPolicy', cargoLink: 'Information/TariffPolicy', visibility: ['FullAccess', 'LimitedAccess'] },
            {
                name: 'CheckTheConditionOfCarriage',
                cargoLink: 'Application/CheckTheConditionOfCarriage',
                visibility: [
                    'adminsatvirto',
                    'RoleStation',
                    'Satvirtodeveloper',
                    'rolertk',
                    'Maneger',
                    'MainRolertk',
                    'FullAccess',
                    'LimitedAccess',
                ],
            },
            { name: 'ExcelSample', cargoLink: 'Information/ExcelSample', visibility: ['FullAccess', 'LimitedAccess'] },
            //{ name: 'InfoDucument', cargoLink: 'PDF/2016_საინფორმაციო_დოკუმენტი.pdf', visibility: ['All'] },
            { name: 'ElectronicDocument', cargoLink: 'PDF/ელექტრონული დოკუმენტაცია_საიტზეგასატანი.pdf', visibility: ['All'] },
            {
                name: 'Instruction',
                cargoLink: 'Information/Instruction',
                visibility: ['FullAccess', 'LimitedAccess', 'Smgs', 'Memo', 'Clamp'],
            },
            { name: 'InfoDucument', cargoLink: 'PDF/საინფორმაციო_დოკუმენტი.pdf', visibility: ['All'] },
            // { name: 'ElectronicDocument', cargoLink: 'PDF/ელექტრონული დოკუმენტაცია_საიტზეგასატანი.pdf', visibility: ['All'] },
            // {
            //     name: 'Instruction',
            //     cargoLink: 'Information/Instruction',
            //     visibility: ['FullAccess', 'LimitedAccess', 'Smgs', 'Memo', 'Clamp'],
            // },
            { name: 'ForSignFiles', cargoLink: 'Information/Download', visibility: ['All'] },
        ],
    },
    // ბილინგი
    {
        name: 'Billing',
        visibility: ['RoleStation'],
        children: [
            { name: 'AdditionalCharge', cargoLink: 'BillingReports/AdditionalCharge', visibility: ['RoleStation', 'adminsatvirto'] },
            { name: 'WayDocSearch', cargoLink: 'BillingReports/WayDocSearch', visibility: ['RoleStation', 'adminsatvirto'] },
            { name: 'WayDocsByOrder', cargoLink: 'BillingReports/WayDocsByOrder', visibility: ['RoleStation', 'adminsatvirto'] },
            { name: 'WayDocDaily', cargoLink: 'BillingReports/WayDocDaily', visibility: ['RoleStation', 'adminsatvirto'] },
            { name: 'Notes', cargoLink: 'BillingReports/Notes', visibility: ['RoleStation', 'adminsatvirto', 'ClientManager'] },
        ],
    },
    // სერვისები
    // {
    //     name: 'Services',
    //     visibility: [
    //         'FullAccess',
    //         'LimitedAccess',
    //         'adminsatvirto',
    //         'rolertk',
    //         'Maneger',
    //         'Satvirtodeveloper',
    //         'RoleStation',
    //         'RoleSattistics',
    //         'modzraoba',
    //         'MainRolertk',
    //     ],
    //     children: [
    //         { name: 'ReviewAgreement', cargoLink: 'ITS/ReviewAgreement', visibility: ['All'] },
    //         { name: 'CarriageStatus', cargoLink: 'ITS/Status', visibility: ['All'] },
    //         {
    //             name: 'WaggonHistory',
    //             cargoLink: 'Reports/ReportWaggonHistory.aspx',
    //             visibility: ['FreightFullAccess', 'Satvirtodeveloper'],
    //         },
    //         {
    //             name: 'WaggonDateTo',
    //             cargoLink: 'Reports/ReportGetWaggonDateTo.aspx',
    //             visibility: ['FreightFullAccess', 'Satvirtodeveloper'],
    //         },
    //         { name: 'PeriodHistory', cargoLink: 'ITS/PeriodHistory', visibility: ['FreightFullAccess', 'Satvirtodeveloper'] },
    //         { name: 'PeriodHistoryOUT', cargoLink: 'ITS/PeriodHistoryOUT', visibility: ['FreightFullAccess', 'Satvirtodeveloper'] },
    //         { name: 'CustomerCard', cargoLink: 'Reports/ReportCustomerCard.aspx', visibility: ['FreightFullAccess', 'Satvirtodeveloper'] },
    //     ],
    // },
];
