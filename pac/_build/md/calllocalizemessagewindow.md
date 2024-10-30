# callLocalizeMessageWindow

Makes *speech bubble* on a specific target, but the message ID is NOT from the [PAC message table](./guide/about-message.md#message-table).

Please add detail description if you know what this does.

See also [How To: Set Speech Bubble](./guide/how-to-set-speech-bubble.md)

## Code Information

- **Name**: `callLocalizeMessageWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 62 00`
- **Assembly Address in Memory** : `0x8917df0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to set thue bubble above.
- `(int *)destination` *(8 bytes)* : Destination to *store message handle*.
- `(float)position_x` *(8 bytes)* : X offset to move the bubble, as *PSP screen pixels*.
- `(float)position_y` *(8 bytes)* : Y offset to move the bubble, as *PSP screen pixels*.
- `(float)Var4` *(8 bytes)* : ??? (If this is smaller than zero, the text is "typed"), it is usually -1, 0, 3, 4.
- `(undefined4)Var5` *(8 bytes)*
- `(undefined4)Var6` *(8 bytes)*
- `(int)local_msg_value` *(8 bytes)* : Affects Message ID.

## Example

Here is one example in hex:

```25 17 62 00 / 08 00 00 00 / 1f 00 00 00 / 08 00 00 00 / 37 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 8c 42 / 10 00 00 00 / 00 00 80 bf / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
callLocalizeMessageWindow(((global)int *)giVar31, ((global)int *)giVar55, (float)0, (float)70, (float)-1, (int)-1, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917df0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  int *piVar8;
  int iVar9;
  uint uVar10;
  undefined4 uVar11;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  piVar8 = (int *)Pac_Get_Param(param_2,7,1,4);
  if (*piVar8 == 0) {
    _DAT_08ab951c = 0;
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar9 = Save::Get_Save_BaseAddr(1);
    uVar10 = FUN_08a0c324(iVar9 + 0x98,0);
    uVar11 = Message::Get_MsgAddr_With_FullID(iVar9 + 0x98,_DAT_08ab951c);
    if (*piVar1 != -1) {
      iVar9 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
      if (iVar9 == 0) {
        iVar9 = 0;
      }
      if (iVar9 != 0) {
        uVar11 = (**(code **)(*(int *)(iVar9 + 4) + 0xec))
                           (*puVar3,*puVar4,*puVar5,iVar9,uVar11,*puVar6,*puVar7,1,1);
        *puVar2 = uVar11;
      }
    }
    if ((int)(_DAT_08ab951c + *piVar8) < 0) {
      _DAT_08ab951c = uVar10 - 1;
    }
    else {
      _DAT_08ab951c = (_DAT_08ab951c + *piVar8) % uVar10;
      if (uVar10 == 0) {
        trap(7);
      }
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

