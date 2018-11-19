import { server } from '../assets/js/server'
import Constants from '@/assets/js/global.js'

let base = Constants['approCenter-host'];
let baseCommon = Constants['common-host'];
let baseDealer = Constants['userCenter-host'];
let baseServer = Constants['servCenter-host'];
let baselog = Constants['login-host']
export const login = params => { return server.post(`${baselog}/main/api/login`, params); };
//===========================================================共通开始================================================================
/**
 * 根据单个ClassId获取code数据 
 */
export const MCodeInfo = params => { return server.post(`${baseCommon}searchMCodeInfo`, params); };
//  20180510 B0865 审批共通页面 车辆地图遗漏  add by luyi start 
/**
 * 获取GPSToken
 */
export const getGPSToken = params => { return server.post(`${baseCommon}getGPSToken`, params); };
//  20180510 B0865 审批共通页面 车辆地图遗漏  add by luyi end
/**
 * 查看账户详情
 */
export const finAccount = params => { return server.post(`${base}finAccount`, params); };
/**
 * 审批共通信息
 */
export const approveInit = params => { return server.post(`${base}approveInit`, params); };
/**
 * 根据省市Id 获取城市信息
 */
export const MCityInfo = params => { return server.post(`${baseCommon}searchMCity`, params); };
/**
 * 查询车系信息
 */
export const CarSeries = params => { return server.post(`${baseCommon}searchCarsSeries`, params); };
/**
 * 车辆品牌查询
 */
export const CarBrand = params => { return server.post(`${baseCommon}searchCarBrand`, params); };
/**
 * 车型查询
 */
export const CarsType = params => { return server.post(`${baseCommon}searchCarsType`, params); };
/**
 * 车型查询
 */
export const trialAmount = params => { return server.post(`${base}trialAmount`, params); };

//===========================================================共通结束  ================================================================

//===========================================================初审开始================================================================
/**
 * 共通未分配
 */
export const noClaimApproveList = params => { return server.post(`${base}noClaimApproveList`, params); };
/**
 * 共通认领
 */
export const approveClaim = params => { return server.post(`${base}approveClaim`, params); };
/**
 * 共通审批中列表
 */
export const approveMidList = params => { return server.post(`${base}approveMidList`, params); };
/**
 * 共通审批中保存
 */
export const saveApproveMid = params => { return server.post(`${base}saveApproveMid`, params); };
/**
 * 共通审批中提交
 */
export const submitApproveMid = params => { return server.post(`${base}submitApproveMid`, params); };
/**
 * 共通退回各个岗位审批中
 */
export const sendBack = params => { return server.post(`${base}sendBack`, params); };
/**
 * 共通退回等待补充资料
 */
export const sendWaitSupple = params => { return server.post(`${base}sendWaitSupple`, params); };

/**
 * 共通等待补充资料列表
 */
export const waitSuppleList = params => { return server.post(`${base}waitSuppleList`, params); };
/**
 * 审批中更新车辆明细中的垫资金额
 */
export const updateCarDetailAdvanceMoneyAmt = params => { return server.post(`${base}updateCarDetailAdvanceMoneyAmt`, params); };

//===========================================================初审结束  ================================================================

//===========================================================放款文件检查开始================================================================

/**
 * 未分配-初始化   /approve/loanDI/searchDeclaInfo
 */

export const searchDeclaInfo = params => { return server.post(`${base}searchDeclaInfo`, params); };

/**
 * 未分配-认领   /approve/loanDI/claimDeclaInfo
 */

export const claimDeclaInfo = params => { return server.post(`${base}claimDeclaInfo`, params); };

/**
 * 审批中操作  /approve/loanDI/approveDecla
 */
export const approveDecla = params => { return server.post(`${base}approveDecla`, params); };
/**
 * 审核类型 1.提交、2.退回初审专员、3.退回信贷专员、4.退回提交贷前资料、5.等待补充资料 
  {
    "approveType": 0,
    "comment": "string",
    "declaApplyId": "string"
  }
 */

/**
 * 审批中信息核查
 */
export const searchDeclaDetail = params => { return server.post(`${base}searchDeclaDetail`, params); };
/**
 * 放款文件检查车架号重复
 */
export const vinnoCheck = params => { return server.post(`${base}vinnoCheck`, params); };


//===========================================================放款文件检查结束  ================================================================

//===========================================================审贷监督复核开始================================================================

/**
 * 审贷监督 - 复核队列   /approve/loanDI/searchDeclaInfo
 */

export const searchAuditSupervision = params => { return server.post(`${base}searchAuditSupervision`, params); };

/**
 * 审贷监督 - 复核   /approve/loanDI/claimDeclaInfo
 */

export const reviewInfo = params => { return server.post(`${base}reviewAuditSupervisionInfo`, params); };

//===========================================================审贷监督复核结束  ================================================================



//===========================================================放款监督复核开始================================================================

/**
 * 放款监督 - 复核 
 */

export const loanSupervisionList = params => { return server.post(`${base}loanSupervisionList`, params); };  // 获取数据列表
export const reviewLoanSupervisionListInfo = params => { return server.post(`${base}reviewLoanSupervisionInfo  `, params); };  // 复核通过
//===========================================================放款监督复核结束  ================================================================

/**
 * 放款结算
 */

export const loanSettlementList = params => { return server.post(`${base}loanSettlementList`, params); };   //  待结算 
export const reviewLoanSettlementListInfo = params => { return server.post(`${base}reviewLoanSettlementListInfo`, params); };  // 放款
export const reviewLoanSupervisionInfo = params => { return server.post(`${base}reviewLoanSupervisionInfo`, params); };  // 退回



/**
 * 物流确认
 */
export const getLogisApply = params => { return server.post(`${base}declaApplyList`, params); };
export const submitLogisInfo = params => { return server.post(`${base}submitDeclaLogistics`, params); };
// 物流报价查询
export const searchRefQuotePrice = params => { return server.post(`${base}searchRefQuotePrice`, params); };

/**
 * 物流修改
 */
export const getLogisUpdateApply = params => { return server.post(`${base}declaApplyFixList`, params); };
export const submitLogisUpdateInfo = params => { return server.post(`${base}submitDeclaLogistics`, params); };

/**
 * 申请查询  
 */

export const searchApplyList = params => { return server.post(`${base}searchApplyList`, params); };
export const declarationQueue = params => { return server.post(`${base}declarationQueue`, params); };

/**申请退回  队列查询*/
export const applyReturnQueue = params => { return server.post(`${base}applyReturnQueue`, params); };
/**申请退回  退回操作*/
export const applyReturnOperation = params => { return server.post(`${base}applyReturnOperation`, params); };
/**申请退回  查询岗位退回的人员接口 */
export const applyReturnChooseHandler = params => { return server.post(`${base}applyReturnChooseHandler`, params); };
export const getDeclaRecoverList = params => { return server.post(`${base}getDeclaRecoverList`, params); }; //垫资申请恢复列表
export const declaRecoverUpate = params => { return server.post(`${base}declaRecoverUpate`, params); }; //垫资申请恢复提交

/**
 * 首付确认 
 */

export const firstPaymentConfirmList = params => { return server.post(`${base}firstPaymentConfirmList`, params); }; //首付确认-查询
export const submitFirstPayment = params => { return server.post(`${base}submitFirstPayment`, params); }; //首付确认-提交
export const firstPaymentConfirmReturn = params => { return server.post(`${base}firstPaymentConfirmReturn`, params); }; //首付确认-退回



//===========================================================收车确认开始================================================================

/**
 * 确认交车 
 */
export const confirmCarDeliveryList = params => { return server.post(`${base}confirmCarDeliveryList `, params); };  // 获取数据列表
export const submitConfirmDelivery = params => { return server.post(`${base}submitConfirmDelivery   `, params); };  // 提交

/**
 * 确认收车 
 */
export const confirmCarReceiveList = params => { return server.post(`${base}confirmCarReceiveList `, params); };  // 获取数据列表
export const submitConfirmReceive = params => { return server.post(`${base}submitConfirmReceive    `, params); };  // 提交
export const selectDelivery = params => { return server.post(`${base}selectDelivery`, params); };  // 确认收车详情
//===========================================================收车确认结束  ================================================================
//===========================================================经销商上线开始 ================================================================
/**
 * 判断经销商是否上线
 * 
 */
export const selecDealerByDealerName = params => { return server.post(`${baseDealer}selecDealerByDealerName`, params); };
/**
 * 经销商上线申请保存
 */
export const CommitDealerApply = params => { return server.post(`${baseDealer}commitDealerApply`, params); };
/**
 * 经销商上线豆腐块查询
 */
export const approveListInit = params => { return server.post(`${baseDealer}approveInit`, params); };
/**
 * 审批点击详情页面
 */
export const approveSelectInit = params => { return server.post(`${baseDealer}approveSelectInit`, params); };
/**
 * 审批提交页面
 */
export const approveSave = params => { return server.post(`${baseDealer}approveSave`, params); };
/**
 * 经销商申请查询豆腐块
 */
export const searchList = params => { return server.post(`${baseDealer}onlineSelect`, params); };
/**
 * 经销商申请查询点击详情方法
 */
export const search = params => { return server.post(`${baseDealer}searchInfo`, params); };
/**
 * 经销商上线后修改提交
 */
export const bullOnlineSubmit = params => { return server.post(`${baseDealer}bullOnlineSubmit`, params); };
//===========================================================经销商上线结束 ================================================================
//===========================================================报单申请开始=================================================================
/**
 * 申请报单初始化
 */
export const addDeclarationInit = params => { return server.post(`${base}addDeclarationInit`, params); }
/**
 * 保单队列
 */
export const declarationQueueInit = params => { return server.post(`${base}declarationQueue`, params); };
/**
 * 买家详细信息查询
 */
export const searchBuyerInfo = params => { return server.post(`${base}searchBuyerInfo`, params); };
/**
 * 卖家信息查询
 */
export const searchSellerInfo = params => { return server.post(`${base}searchSellerInfo`, params); };
/**
 * 金融产品信息查询
 */
export const searchFinPorduct = params => { return server.post(`${base}searchFinPorduct`, params); };
/**
 * 查询金融产品信息
 */
// export const searchFinPorduct = params => { return  server.post(`${base}searchFinPorduct`, params );};
/**
 * 提交报单信息
 */
export const declarationSubmit = params => { return server.post(`${base}declarationSubmit`, params); };
/**
 * 保存报单信息
 */
export const declarationApplySave = params => { return server.post(`${base}declarationApplySave`, params); };
/**
 * 修改报单，查询详情页面
 */
export const declarationDetail = params => { return server.post(`${base}declarationDetail`, params); };
/**
 * 保存报单信息  
 */
export const declarationSave = params => { return server.post(`${base}declarationSave`, params); };
/**
 * 退回修改提交
 */
export const declarationReturnSubmit = params => { return server.post(`${base}declarationReturnSubmit`, params); };
/**
 * 审批中等待补充资料提交保存
 */
export const declarationApproveWaitDataSaSu = params => { return server.post(`${base}declarationApproveWaitDataSaSu`, params); };
/**
 * 贷前等待补充材料提交保存
 */
export const declarationPreLoanWaitDataSaSu = params => { return server.post(`${base}declarationPreLoanWaitDataSaSu`, params); };
/**
 * 认领贷前资料
 */
export const declarationClaimPreLoanData = params => { return server.post(`${base}declarationClaimPreLoanData`, params); };
/**
 * 提交贷前资料保存、提交
 */
export const declarationPreLoanDataSaSu = params => { return server.post(`${base}declarationPreLoanDataSaSu`, params); };
/**
 * 账户详情查看功能
 */
export const searchDealerFinAccount = params => { return server.post(`${base}/searchDealerFinAccount`, params); };
/**
 * 选择卖家之后调用函数
 */
export const sellerAndAccountSearch = params => { return server.post(`${base}sellerAndAccountSearch`, params); };
/**
 * 选择账户之后调用函数
 */
export const sellerAndAccountByAccountId = params => { return server.post(`${base}sellerAndAccountByAccountId`, params); };
/**
 * 选择联系人之后调用函数
 */
export const sellerContactById = params => { return server.post(`${base}sellerContactById`, params); };


//===========================================================报单申请结束=================================================================

//===========================================================补单申请开始=================================================================

/**
 * 未领取列表
 */
export const suppleDecListWaitClaim = params => { return server.post(`${base}/suppleDecListWaitClaim`, params); };
/**
 * 认领
 */
export const suppleDecClaim = params => { return server.post(`${base}/suppleDecClaim`, params); };
/**
 * 已领取列表
 */
export const suppleDecList = params => { return server.post(`${base}/suppleDecList`, params); };
/**
 * 补单提交页面
 */
export const selectSuppleDecDetail = params => { return server.post(`${base}/selectSuppleDecDetail`, params); };


//===========================================================补单申请结束=================================================================

//===========================================================生成验车任务开始=================================================================

/**
 * 查询列表
 */
export const checkCartaskList = params => { return server.post(`${base}checkCartaskList`, params); };
/**
 * 获取分期专员
 */
export const getRegioncompanyUser = params => { return server.post(`${base}getRegioncompanyUser`, params); };
/**
 * 获取管理员
 */
export const getManagerInfo = params => { return server.post(`${base}getManagerInfo`, params); };
/**
 * 任务详情
 */
export const getCheckCarTaskDetail = params => { return server.post(`${base}getCheckCarTaskDetail`, params); };
/**
 * 派发校验
 */
export const checkBeforeDis = params => { return server.post(`${base}checkBeforeDis`, params); };
/**
 * 更改任务状态
 */
export const updateCheckCarTask = params => { return server.post(`${base}updateCheckCarTask`, params); };

//===========================================================生成验车任务结束=================================================================

//===========================================================邮寄贷后原件=================================================================

/**
 * 查询列表
 */
export const selectTaskList = params => { return server.post(`${base}selectTaskList`, params); };
/**
 * 取消
 */
export const cancelOperation = params => { return server.post(`${base}cancelOperation`, params); };
/**
 * 提交取消
 */
export const submitCancel = params => { return server.post(`${base}submitCancel`, params); };
/**
 * 详情
 */
export const getDetailInfo = params => { return server.post(`${base}getDetailInfo`, params); };



//===========================================================贷款合同确认开始=================================================================

/**
 * 列表
 */

export const conLoanContList = params => { return server.post(`${base}confirmLoanContractList`, params); };  //查询列表

/**
* 详情
*/
export const subLoanContract = params => { return server.post(`${base}submitLoanContract`, params); };  //查询列表

//===========================================================贷款合同确认结束=================================================================

//===========================================================签约通知确认开始=================================================================

/**
 *签约通知列表
 */
export const confirmNoticeQueue = params => { return server.post(`${base}confirmNoticeQueue`, params); };
/**
 *通知确认
 */
export const confirmNoticeSubmit = params => { return server.post(`${base}confirmNoticeSubmit`, params); };
//===========================================================签约通知确认结束=================================================================
//===========================================================申请管理开始=================================================================
/**
 *申请取消列表
 */
export const applyCancleQueue = params => { return server.post(`${base}applyCancleQueue`, params); };
/**
 *申请取消
 */
export const applyCancleOperation = params => { return server.post(`${base}applyCancleOperation`, params); };
/**
 *已放款申请修改-查询
 */
export const searchLoanApply = params => { return server.post(`${base}searchLoanApply`, params); };
/**
 *已放款申请修改-提交
 */
export const loanApplyUpdate = params => { return server.post(`${base}loanApplyUpdate`, params); };
/**
 * 金融专员申请分配-table获取
 */
export const applyDistributionQueue = params => { return server.post(`${base}applyDistributionQueue`, params); };
/**
 * 金融专员申请分配-分配
 */
export const applyDistributionOperation = params => { return server.post(`${base}applyDistributionOperation`, params); };
//===========================================================申请管理结束=================================================================

//===========================================================合同打印开始=================================================================
// 合同查询
export const contractPrintingList = params => { return server.post(`${base}contractPrintingList`, params); };
// 合同打印
export const contractPrinting = params => { return server.post(`${base}contractPrinting`, params); };
//===========================================================合同打印结束=================================================================

//===========================================================物流费月结开始=================================================================
// 物流费申请列表
export const searchCostApplyList   = params => { return server.post(`${base}searchCostApplyList`, params); };
// 物流公司
export const selectByCompanyType   = params => { return server.post(`${baseServer}selectByCompanyType`, params); };
// 物流费申请申请
export const submitCostApply   = params => { return server.post(`${base}submitCostApply`, params); };
// 物流费申请申请详情
export const selectCostApplyDetailList   = params => { return server.post(`${base}selectCostApplyDetailList`, params); };
// 物流费申请申请详情
export const updateCostApplyDetail   = params => { return server.post(`${base}updateCostApplyDetail`, params); };
// 物流费确认-退回操作
export const returnCostApply  = params => { return server.post(`${base}returnCostApply`, params); };
// 物流费支付确认-验证
export const isValidConfirmCostApply  = params => { return server.post(`${base}isValidConfirmCostApply`, params); };
//物流费支付确认-提交
export const submitConfirmCostApply  = params => { return server.post(`${base}submitConfirmCostApply`, params); };
//物流费点击申请验证
export const validationCostApply = params => { return server.post(`${base}validationCostApply`, params); };
//===========================================================物流费月结结束=================================================================//===========================================================合同打印结束=================================================================

//===========================================================物流费月结结束=================================================================
//===========================================================库融贷开始=================================================================
// 库融贷--导入
export const submitTreasuryLoanApply = params => { return server.post(`${base}submitTreasuryLoanApply`, params); };
// 库融贷--申请查询
export const selectTreasuryLoanApplyList = params => { return server.post(`${base}selectTreasuryLoanApplyList`, params); };
// 库融贷--申请查询详情
export const selectTreasuryLoanApplyDetail = params => { return server.post(`${base}selectTreasuryLoanApplyDetail`, params); };
// 库融贷--修改查询详情
export const modifyTreasuryLoanApplyDetail = params => { return server.post(`${base}modifyTreasuryLoanApplyDetail`, params); };
//===========================================================库融贷结束=================================================================


// ==========================================================放款前开始=================================================================
// 放款前应付 - 队列
export const loanBeforePayableQueue = params => { return server.post(`${base}loanBeforePayableQueue`, params); }; 
// 放款前应付 - 提交
export const loanBeforePayableSubmit = params => { return server.post(`${base}loanBeforePayableSubmit`, params); };
// ==========================================================放款前结束=================================================================
//===========================================================放款后 - 邮寄贷后原件任务=================================================================
//列表
export const selectAfterLoanTaskList = params => { return server.post(`${base}selectAfterLoanTaskList`, params); };
//修改
export const submitEditAfterLoan = params => { return server.post(`${base}submitEditAfterLoan`, params); };
//完成
export const submitFinishAfterLoan   = params => { return server.post(`${base}submitFinishAfterLoan`, params); };
// 查询快递信息详细
export const expressInfoDetailAfterLoan   = params => { return server.post(`${base}expressInfoDetailAfterLoan`, params); };
//===========================================================库融贷结束=================================================================