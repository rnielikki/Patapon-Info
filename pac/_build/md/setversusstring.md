# setVersusString

Displays VS status Message on the ground.

## Code Information

- **Name**: `setVersusString`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f6 00`
- **Assembly Address in Memory** : `0x89270e4`

## Parameters

- `(int)iVar0` *(8 bytes)* : Set 2 to make it visible.
- `(int)iVar1` *(8 bytes)* : Set to 0.
- `(int *)handle_id` *(8 bytes)* : Unit handle from [getUnitHandle](./getunithandle.md), **just set this to -1**.
- `(Address)message_address` *(4 bytes)* : Message to display.
  - This is message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).
- `(int)red` *(8 bytes)* : Red colour of the text, in range of **0~255**.
- `(int)green` *(8 bytes)* : Green colour of the text, in range of **0~255**.
- `(int)blue` *(8 bytes)* : Blue colour of the text, in range of **0~255**.

## Example

Here is one example in hex:

```25 16 f6 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff ff ff ff / 74 14 07 00 / 02 00 00 00 / ff 00 00 00 / 02 00 00 00 / ff 00 00 00 / 02 00 00 00 / ff 00 00 00```

Which is interpreted as:

```c
setVersusString((int)2, (int)0, (int)-1, 0x71474, (int)255, (int)255, (int)255)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089270e4(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  uint *puVar5;
  int *piVar6;
  int *piVar7;
  int iVar8;
  int iVar9;
  int iVar10;
  uint uVar11;
  int iVar12;
  int iVar13;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,0,4);
  puVar5 = (uint *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  iVar13 = *piVar4;
  if (iVar13 < 0) {
    iVar13 = 0;
  }
  else {
    iVar8 = FUN_0883bc1c(param_2);
    iVar9 = Save::Get_Save_BaseAddr(1);
    iVar13 = Message::Get_MsgAddr_With_FullID(iVar9 + 0x98,*(undefined4 *)(iVar8 + iVar13));
  }
  iVar12 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x68);
  iVar9 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar3,1);
  iVar8 = 0;
  if ((iVar9 != 0) && (iVar10 = (**(code **)(*(int *)(iVar9 + 4) + 0x34))(iVar9), iVar10 == 10)) {
    iVar8 = iVar9;
  }
  if (((iVar13 != 0) && (iVar12 != 0)) && ((iVar8 != 0 || (*piVar1 == 2)))) {
    uVar11 = *piVar7 << 0x10 | *puVar5 | *piVar6 << 8 | 0xff000000;
    if (*piVar1 == 2) {
      iVar8 = func_0x08b36458(iVar12);
      if (iVar8 != 0) {
                    // normal vs messages below
        VS::Render_VS_Message(iVar8,iVar13,uVar11,2,0);
      }
    }
    else if (*piVar1 == 1) {
      iVar9 = func_0x08b36460(iVar12,*puVar2);
      if (iVar9 != 0) {
        VS::Render_VS_Message(iVar9,iVar13,uVar11,1,iVar8);
      }
    }
    else {
      iVar9 = func_0x08b36450(iVar12);
      if (iVar9 != 0) {
        VS::Render_VS_Message(iVar9,iVar13,uVar11,0,iVar8);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

