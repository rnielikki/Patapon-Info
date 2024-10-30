# setMsgWndColor

Sets *background* colour of the bubble speech.

See also [How To: Set Speech Bubble](./guide/how-to-set-speech-bubble.md)

## Code Information

- **Name**: `setMsgWndColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 32 00`
- **Assembly Address in Memory** : `0x89141fc`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.
- `(int)red` *(8 bytes)* : Red, in range of **0~255**.
- `(int)green` *(8 bytes)* : Green, in range of **0~255**.
- `(int)blue` *(8 bytes)* : Blue, in range of **0~255**.

## Example

Here is one example in hex:

```25 17 32 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff 00 00 00 / 02 00 00 00 / af 00 00 00 / 02 00 00 00 / be 00 00 00```

Which is interpreted as:

```c
setMsgWndColor((int *)iVar0, (int)255, (int)175, (int)190)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089141fc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined *puVar2;
  undefined *puVar3;
  undefined *puVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined *)Pac_Get_Param(param_2,3,1,4);
  if (*piVar1 != -1) {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 != 0) {
      (**(code **)(*(int *)(iVar5 + 4) + 0x104))(iVar5,*puVar2,*puVar3,*puVar4);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

