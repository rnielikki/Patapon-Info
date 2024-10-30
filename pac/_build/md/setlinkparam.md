# setLinkParam

Sets detail of the effect link information. Called after [setLink](./setlink.md).

## Code Information

- **Name**: `setLinkParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 1b 00`
- **Assembly Address in Memory** : `0x8912854`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md) of the *attached object*.
- `(bool)Var1` *(8 bytes)* : Please describe what this does.
- `(bool)Var2` *(8 bytes)* : Please describe what this does.
- `(bool)backward_offset` *(8 bytes)* : 1 from backward pivot, 0 from forward pivot.
- `(float)offset_x` *(8 bytes)* : X offset of the effect.
- `(float)offset_y` *(8 bytes)* : Y offset of the effect.
- `(float)offset_z` *(8 bytes)* : Z offset of the effect.

## Example

Here is one example in hex:

```25 17 1b 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 48 42 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setLinkParam((int *)iVar0, (int)1, (int)0, (int)0, (float)0, (float)50, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912854(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  int iVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  iVar8 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar8 == 0) {
    iVar8 = 0;
  }
  if ((iVar8 != 0) && (iVar8 = *(int *)(iVar8 + 200), iVar8 != 0)) {
    *(bool *)(iVar8 + 0x1dc) = *piVar2 != 0;
    if (*piVar3 == 0) {
      *(undefined4 *)(iVar8 + 0x1d8) = 2;
    }
    else {
      *(undefined4 *)(iVar8 + 0x1d8) = 0;
    }
    if (*piVar4 == 0) {
      uVar10 = *puVar7;
      uVar9 = *puVar6;
      *(undefined4 *)(iVar8 + 0x1c0) = *puVar5;
      *(undefined4 *)(iVar8 + 0x1c4) = uVar9;
      *(undefined4 *)(iVar8 + 0x1c8) = uVar10;
    }
    else {
      *(undefined *)(iVar8 + 0x1de) = 1;
      uVar10 = *puVar7;
      uVar9 = *puVar6;
      *(undefined4 *)(iVar8 + 0x1cc) = *puVar5;
      *(undefined4 *)(iVar8 + 0x1d0) = uVar9;
      *(undefined4 *)(iVar8 + 0x1d4) = uVar10;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

