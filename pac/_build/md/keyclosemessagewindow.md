# keyCloseMessageWindow

Adds "X" button to the message.

See also [How To: Set Speech Bubble](./guide/how-to-set-speech-bubble.md)

This pauses pac instruction execution until the speech bubble is closed.

## Code Information

- **Name**: `keyCloseMessageWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2f 00`
- **Assembly Address in Memory** : `0x8913d68`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.
- `(Undefined)Var1` *(8 bytes)* : It is `9` in examples, however, this is not used.
- `(int)close_button_Id` *(8 bytes)* : [Input Button ID](./guide/reference-table.md#input-id-flags) to close the window. Keep `0x4000` to close with `X` button.
- `(int)close_button_Id2` *(8 bytes)* : The other [Input Button ID](./guide/reference-table.md#input-id-flags) to close the window. Keep `0x0` to not assign them.

## Example

Here is one example in hex:

```25 17 2f 00 / 08 00 00 00 / 5b 00 00 00 / 02 00 00 00 / 09 00 00 00 / 02 00 00 00 / 00 40 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
keyCloseMessageWindow(((global)int *)giVar91, (int)9, (int)0x4000, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913d68(int param_1,undefined4 param_2)

{
  int iVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 uVar5;
  
  iVar1 = Get_Execution_Pause_Phase(param_2);
  if (iVar1 == 0) {
    piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
    Pac_Get_Param(param_2,1,1,4);
    puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
    puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
    if (*piVar2 == -1) {
      PAC::PAC_setCmdId(param_2,0);
    }
    else {
      iVar1 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar2,1);
      if (iVar1 == 0) {
        iVar1 = 0;
      }
      *(int *)(param_1 + 0x10) = iVar1;
      *(undefined4 *)(param_1 + 0x18) = 0;
      *(undefined4 *)(param_1 + 0x1c) = *puVar3;
      *(undefined4 *)(param_1 + 0x20) = *puVar4;
      if (*(int *)(param_1 + 0x18) == 0) {
        Pause_Execution(param_2,3);
      }
      else {
        *(undefined *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0xe8) + 4) + 0x2f0) = 0;
        Pause_Execution(param_2,1);
      }
    }
  }
  else if ((*(int *)(param_1 + 0x10) == 0) || (*(int *)(*(int *)(param_1 + 0x10) + 0xe8) == 0)) {
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar1 = FUN_08851bec(1);
    uVar5 = *(undefined4 *)(iVar1 + 0x10c);
    iVar1 = Get_Execution_Pause_Phase(param_2);
    if (iVar1 == 1) {
      iVar1 = Input::Has_Input(uVar5,*(uint *)(param_1 + 0x1c) | *(uint *)(param_1 + 0x20));
      if (iVar1 == 0) {
        iVar1 = *(int *)(param_1 + 0x18);
      }
      else {
        (**(code **)(*(int *)(*(int *)(param_1 + 0x10) + 4) + 0xf4))();
        iVar1 = *(int *)(param_1 + 0x18);
      }
      if (iVar1 != 0) {
        *(int *)(param_1 + 0x18) = iVar1 + -1;
        return;
      }
      *(undefined *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0xe8) + 4) + 0x2f0) = 1;
      Pause_Execution(param_2,3);
    }
    iVar1 = Get_Execution_Pause_Phase(param_2);
    if (iVar1 == 2) {
      if (*(int *)(param_1 + 0x18) != 0) {
        *(int *)(param_1 + 0x18) = *(int *)(param_1 + 0x18) + -1;
        return;
      }
      Pause_Execution(param_2,3);
    }
    iVar1 = Get_Execution_Pause_Phase(param_2);
    if (iVar1 == 3) {
      iVar1 = FUN_08877b6c(1);
      iVar1 = FUN_08836f88(iVar1 + 0x10);
      if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x75) << 0x1d) < 0) {
        return;
      }
      iVar1 = FUN_08852c04(uVar5,*(uint *)(param_1 + 0x1c) | *(uint *)(param_1 + 0x20));
      if (iVar1 == 0) {
        return;
      }
      iVar1 = (**(code **)(**(int **)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0xe8) + 4) +
                                     0x150) + 0x74))();
      if (iVar1 == 0) {
        (**(code **)(*(int *)(*(int *)(param_1 + 0x10) + 4) + 0xf4))();
        return;
      }
      iVar1 = FUN_088e6a34(1);
      Sound::Play_Sound(0,0x3f800000,0,0,0,0x3f800000,0,iVar1 + 0x60,0x900002);
      iVar1 = *(int *)(param_1 + 0x10);
    }
    else {
      iVar1 = *(int *)(param_1 + 0x10);
    }
    (**(code **)(*(int *)(iVar1 + 4) + 0xf0))();
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

