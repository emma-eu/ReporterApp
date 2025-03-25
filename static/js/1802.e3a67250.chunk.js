"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[1802],{9861:(e,r,t)=>{t.d(r,{B:()=>m,D$:()=>i,Nh:()=>p,O$:()=>d,TX:()=>n,mT:()=>l,ps:()=>y});var n,a=t(88685);!function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"}(n||(n={}));const s={[n.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[n.LogicError]:"Logic error - {reason}",[n.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[n.NeverReach]:"Encountered unreachable logic",[n.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[n.ModuleAccessorMustBeString]:"Module accessor must be a string",[n.ModuleExportNotFound]:"Module has no export with provided identifier",[n.ModulesNotSupported]:"Current profile does not support modules",[n.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[n.FunctionNotFound]:"Function not found",[n.FieldNotFound]:"Key not found - {key}",[n.CircularModules]:"Circular module dependencies are not allowed",[n.Cancelled]:"Execution cancelled",[n.UnsupportedHashType]:"Type not supported in hash function",[n.IllegalResult]:"Value is not a supported return type",[n.PortalRequired]:"Portal is required",[n.InvalidParameter]:"Invalid parameter",[n.WrongNumberOfParameters]:"Call with wrong number of parameters",[n.Unrecognized]:"Unrecognized code structure",[n.UnrecognizedType]:"Unrecognized type",[n.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[n.BooleanConditionRequired]:"Conditions must use booleans",[n.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[n.NoFunctionInArray]:"Arrays cannot contain functions.",[n.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[n.KeyAccessorMustBeString]:"Accessor must be a string",[n.KeyMustBeString]:"Object keys must be a string",[n.Immutable]:"Object is immutable",[n.UnexpectedToken]:"Unexpected token",[n.MemberOfNull]:"Cannot access property of null object",[n.MaximumCallDepth]:"Exceeded maximum function depth",[n.OutOfBounds]:"Out of bounds",[n.InvalidIdentifier]:"Identifier not recognized",[n.CallNonFunction]:"Expression is not a function",[n.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[n.AssignModuleFunction]:"Cannot assign function to module variable",[n.UnsupportedUnaryOperator]:"Unsupported unary operator",[n.UnsupportedOperator]:"Unsupported operator",[n.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[n.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[n.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[n.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[n.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};class o extends Error{constructor(){super(...arguments)}}class c extends o{constructor(e,r){super(u(r)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,c),r?.loc&&(this.loc=r.loc)}}class i extends Error{constructor(e,r,t,n){super("Execution error - "+u(t)+(0,a.HC)(s[r],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,i),t?.loc&&(this.loc=t.loc)}}function u(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class l extends Error{constructor(e,r,t,n){super("Compilation error - "+u(t)+(0,a.HC)(s[r],n)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,l),t?.loc&&(this.loc=t.loc)}}class d extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,d)}}function p(e,r,t){return"esri.arcade.arcadeexecutionerror"===t.declaredRootClass||"esri.arcade.arcadecompilationerror"===t.declaredRootClass?null===t.loc&&r?.loc?new c(t,{cause:t}):t:("esri.arcade.featureset.support.featureseterror"===t.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===t.declaredRootClass||t.declaredRootClass,r?.loc?new c(t,{cause:t}):t)}var m;!function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(m||(m={}));const f={[m.UnrecognizedUri]:"Unrecognized uri - {uri}",[m.UnsupportedUriProtocol]:"Unrecognized uri protocol"};class y extends Error{constructor(e,r){super((0,a.HC)(f[e],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,y)}}},41802:(e,r,t)=>{t.d(r,{convert:()=>w,convertFromSpatialReferenceUnit:()=>b,convertToSpatialReferenceUnit:()=>k,meters:()=>a.L2,squareMeters:()=>a.A7,toAreaUnit:()=>g,toLengthUnit:()=>h});var n=t(9861),a=t(82583);const s=[];function o(e){return 0===e.length?'""':'"'===e[0]||"."===e[0]||e[0]>="0"&&e[0]<="9"?e:'"'+e.trim()+'"'}function c(e){let r="",t="",n=!1;for(let a=0;a<e.length;a++){const s=e[a];n?'"'===s?'"'===e[a+1]?(r+=`\\${s}`,a+=1):n=!1:r+=s:/\s/.test(s)||(","===s?(t+=""!==r?o(r)+",":",",r=""):")"===s||"]"===s?(t+=""!==r?o(r)+"]}":"]}",r=""):"("===s||"["===s?(t+='{ "entity": "'+r.toUpperCase().trim()+'", "values":[',r=""):'"'===s?(n=!0,r=""):r+=s)}return JSON.parse(t)}function i(e){try{for(let a=0;a<s.length;a++)if(s[a].spatialReferenceWkt===e)return s[a].unit;const r=u(c(e));if(null===r)return null;let t=null;for(const e of r.values)if("object"==typeof e&&("UNIT"===e.entity||"ANGLEUNIT"===e.entity||"LENGTHUNIT"===e.entity)){t=e;break}if(null===t)return null;const n=function(e,t,n){if(null!=n)try{if("EPSG"===n.values[0])return{type:e,wkid:Number.parseInt(n.values[1],10),factor:t}}catch(r){}return{type:e,factor:t}}("GEOGCS"===r.entity||"GEOGCRS"===r.entity?"angular":"linear",t.values[1],t.values[2]);return s.push({spatialReferenceWkt:e,unit:n}),s.length>10&&s.shift(),n}catch(r){return null}}function u(e){if(null===e)return null;switch(e.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return e}const r=[];for(const t of e.values)if("object"==typeof t&&void 0!==t.entity)switch(t.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return t;default:r.push(t)}for(const t of r){const e=u(t);if(null!=e)return e}return null}t(81806);var l=t(31633),d=t(85996);const p=-1;function m(e,r){let t;switch(e){case"linear":t=a.s9;break;case"angular":t=a.zD;break;case"area":t=a.y6;break;default:return null}return t.get(r)}function f(e){const r=e.wkid;if(null!=r){const e=d.A.units[d.A[r]];if(null!=e)switch(e){case"Meter":return m("linear",9001);case"Foot":return m("linear",9002);case"Foot_US":return m("linear",9003);case"Foot_Clarke":return m("linear",9005);case"Yard_Clarke":return m("linear",9037);case"Link_Clarke":return m("linear",9039);case"Yard_Sears":return m("linear",9040);case"Foot_Sears":return m("linear",9041);case"Chain_Sears":return m("linear",9042);case"Chain_Benoit_1895_B":return m("linear",9062);case"Yard_Indian":return m("linear",9084);case"Yard_Indian_1937":return m("linear",9085);case"Foot_Gold_Coast":return m("linear",9094);case"Chain":return m("linear",9097);case"Chain_Sears_1922_Truncated":return m("linear",9301);case"50_Kilometers":return m("linear",109030);case"150_Kilometers":return m("linear",109031);default:throw new Error(`Unknown unit name: ${e}`)}return l.yD.has(r)?m("angular",9105):m("angular",9102)}const t=e.wkt2||e.wkt;if(null!=t){const e=i(t);if(null!=e){if(null!=e.wkid){const r=m(e.type,e.wkid);if(null!=r)return r}return{type:e.type,wkid:p,factor:e.factor}}}return null}function y(e){if("linear"!==e.type)return null;if(e.wkid===p)return{type:"area",wkid:p,factor:e.factor**2};const r=a.SQ.get(e.wkid);return null==r?null:m("area",r)}function g(e){if(null!=e){if("number"==typeof e)return a.y6.get(e)??a.s9.get(e)??a.zD.get(e);if("string"!=typeof e)throw new n.D$(null,n.TX.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return a.y6.get(109404);case"miles":case"mile":case"squaremile":case"squaremiles":return a.y6.get(109439);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return a.y6.get(109414);case"acres":case"acre":case"ac":return a.y6.get(109402);case"hectares":case"hectare":case"ha":return a.y6.get(109401);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return a.y6.get(109442);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return a.y6.get(109405);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return a.y6.get(109409);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return a.y6.get(109452);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return a.y6.get(109451);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return a.y6.get(109450);case"inch":case"inches":case"squareinch":case"squareinches":return a.y6.get(109453);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return a.y6.get(109406);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return a.y6.get(109413)}}}function h(e){if(null!=e){if("number"==typeof e)return a.s9.get(e)??a.zD.get(e)??a.y6.get(e);if("string"!=typeof e)throw new n.D$(null,n.TX.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"hectares":case"hectare":case"ha":return a.s9.get(9001);case"miles":case"mile":case"squaremile":case"squaremiles":return a.s9.get(9093);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return a.s9.get(9036);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":case"acres":case"acre":case"ac":return a.s9.get(9096);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return a.s9.get(9002);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return a.s9.get(9030);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return a.s9.get(109007);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return a.s9.get(109006);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return a.s9.get(109005);case"inch":case"inches":case"squareinch":case"squareinches":return a.s9.get(109008);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return a.s9.get(9003);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return a.s9.get(9035)}}}function C(e,r,t){if(e.type!==r.type)throw new Error(`Incompatible unit types. src=${e.type} dest=${r.type}`);return t*(e.factor/r.factor)}function b(e,r,t){if(null==e||null==r)return t;const n=f(e);if(null==n)throw new Error("Unknown spatial reference unit.");const a="area"===r.type&&"linear"===n.type?y(n):n;if(null==a)throw new Error(`Unknown spatial reference ${r.type} unit.`);return C(a,r,t)}function k(e,r,t){if(null==e||null==r)return t;const n=f(r);if(null==n)throw new Error("Unknown spatial reference unit.");const a="area"===e.type&&"linear"===n.type?y(n):n;if(null==a)throw new Error(`Unknown spatial reference ${e.type} unit.`);return C(e,a,t)}function w(e,r,t){return null==e||null==r?t:C(e,r,t)}},82583:(e,r,t)=>{t.d(r,{A7:()=>p,L2:()=>u,SQ:()=>n,s9:()=>i,y6:()=>d,zD:()=>o});const n=new Map([[1025,109452],[1033,109451],[9001,109404],[9002,109405],[9003,109406],[9005,109407],[9014,109408],[9030,109409],[9031,109410],[9033,109411],[9034,109412],[9035,109413],[9036,109414],[9037,109415],[9038,109416],[9039,109417],[9040,109418],[9041,109419],[9042,109420],[9043,109421],[9050,109422],[9051,109423],[9052,109424],[9053,109425],[9060,109426],[9061,109427],[9062,109428],[9063,109429],[9070,109430],[9080,109431],[9081,109432],[9082,109433],[9083,109434],[9084,109435],[9085,109436],[9086,109437],[9087,109438],[9093,109439],[9094,109440],[9095,109441],[9096,109442],[9097,109444],[9098,109445],[9099,109446],[9300,109447],[9301,109448],[9302,109449],[109001,109442],[109002,109443],[109003,109444],[109004,109445],[109005,109450],[109006,109451],[109007,109452],[109008,109453],[109009,109454],[109010,109455],[109011,109456],[109012,109457],[109013,109458],[109014,109459],[109015,109462],[109016,109464],[109017,109465],[109018,109466],[109030,109460],[109031,109461]]);function a(e){return(r,t)=>[r,{type:e,wkid:r,factor:t}]}const s=a("angular"),o=new Map([s(1031,4.84813681109536e-9),s(9101,1),s(9102,.017453292519943295),s(9103,.0002908882086657216),s(9104,484813681109536e-20),s(9105,.015707963267948967),s(9106,.015707963267948967),s(9109,1e-6),s(9112,.00015707963267948965),s(9113,15707963267948967e-22),s(9114,.0009817477042468104)]),c=a("linear"),i=new Map([c(1025,.001),c(1033,.01),c(9001,1),c(9002,.3048),c(9003,.30480060960121924),c(9005,.3047972654),c(9014,1.8288),c(9030,1852),c(9031,1.0000135965),c(9033,20.11684023368047),c(9034,.2011684023368047),c(9035,1609.3472186944375),c(9036,1e3),c(9037,.9143917962),c(9038,20.1166195164),c(9039,.201166195164),c(9040,.9143984146160287),c(9041,.3047994715386762),c(9042,20.116765121552632),c(9043,.2011676512155263),c(9050,.9143992),c(9051,.3047997333333333),c(9052,20.1167824),c(9053,.201167824),c(9060,.9143992042898124),c(9061,.30479973476327077),c(9062,20.116782494375872),c(9063,.2011678249437587),c(9070,.30480083333333335),c(9080,.30479951024814694),c(9081,.30479841),c(9082,.3047996),c(9083,.3047995),c(9084,.9143985307444408),c(9085,.91439523),c(9086,.9143988),c(9087,.9143985),c(9093,1609.344),c(9094,.3047997101815088),c(9095,.3048007491),c(9096,.9144),c(9097,20.1168),c(9098,.201168),c(9099,.914398),c(9300,.30479933333333337),c(9301,20.116756),c(9302,.20116756),c(109001,.9144),c(109002,.9144018288036576),c(109003,20.1168),c(109004,.201168),c(109005,.1),c(109006,.01),c(109007,.001),c(109008,.0254),c(109009,.025400050800101603),c(109010,5.0292),c(109011,5.029210058420118),c(109012,1853.248),c(109013,1853.184),c(109014,1.7018),c(109015,.8466683600033867),c(109016,.00035277777777777776),c(109017,1e-6),c(109018,1e-9),c(109030,5e4),c(109031,15e4)]),u=i.get(9001),l=a("area"),d=new Map([l(109401,1e4),l(109402,4046.8564224),l(109403,4046.872609874252),l(109404,1),l(109405,.09290304),l(109406,.09290341161327487),l(109407,.09290137299531805),l(109408,3.34450944),l(109409,3429904),l(109410,1.000027193184865),l(109411,404.6872609874253),l(109412,.04046872609874252),l(109413,2589998.470319522),l(109414,1e6),l(109415,.8361123569578626),l(109416,404.6783807676053),l(109417,.04046783807676053),l(109418,.8361244606523066),l(109419,.09290271785025629),l(109420,404.6842389557165),l(109421,.04046842389557164),l(109422,.83612589696064),l(109423,.0929028774400711),l(109424,404.6849341289498),l(109425,.04046849341289498),l(109426,.836125904805842),l(109427,.09290287831176021),l(109428,404.6849379260275),l(109429,.04046849379260275),l(109430,.09290354800069446),l(109431,.09290274144751023),l(109432,.09290207073852812),l(109433,.09290279616016),l(109434,.09290273520025),l(109435,.836124673027592),l(109436,.8361186366467529),l(109437,.8361251654414399),l(109438,.83612461680225),l(109439,2589988.110336),l(109440,.09290286332673177),l(109441,.09290349665192114),l(109442,.83612736),l(109443,.8361307045194736),l(109444,404.68564224),l(109445,.040468564224),l(109446,.836123702404),l(109447,.09290263360044447),l(109448,404.683871963536),l(109449,.0404683871963536),l(109450,.01),l(109451,1e-4),l(109452,1e-6),l(109453,64516e-8),l(109454,.0006451625806477421),l(109455,25.29285264),l(109456,25.29295381171408),l(109457,3434528.149504),l(109458,3434290.937856),l(109459,2.89612324),l(109460,25e8),l(109461,225e8),l(109462,.7168473118308245),l(109463,100),l(109464,1.244521604938271e-7),l(109465,1e-12),l(109466,1e-18)]),p=d.get(109404)}}]);
//# sourceMappingURL=1802.e3a67250.chunk.js.map