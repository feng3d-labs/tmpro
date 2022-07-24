import { classUtils, AddComponentMenu } from 'feng3d';
import { TMP_Text } from './TMP_Text';

classUtils.addClassNameSpace('tmpro');

// [0]:Text (TMP) (UnityEngine.RectTransform)
// [1]:Text (TMP) (UnityEngine.CanvasRenderer)
// [2]:Text (TMP) (TMPro.TextMeshProUGUI)

@AddComponentMenu('UI/TextMeshPro - Text (UI)')
export class TextMeshProUGUI extends TMP_Text
{

}
