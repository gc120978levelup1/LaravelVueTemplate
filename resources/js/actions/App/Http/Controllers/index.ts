import ComplaintController from './ComplaintController'
import MapController from './MapController'
import FaceRecogController from './FaceRecogController'
import QxQRGenController from './QxQRGenController'
import IDScanController from './IDScanController'
import TakePhotoController from './TakePhotoController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    ComplaintController: Object.assign(ComplaintController, ComplaintController),
MapController: Object.assign(MapController, MapController),
FaceRecogController: Object.assign(FaceRecogController, FaceRecogController),
QxQRGenController: Object.assign(QxQRGenController, QxQRGenController),
IDScanController: Object.assign(IDScanController, IDScanController),
TakePhotoController: Object.assign(TakePhotoController, TakePhotoController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers