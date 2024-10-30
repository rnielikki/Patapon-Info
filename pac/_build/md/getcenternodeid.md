# getCenterNodeId

Gets center (root) of node of **an unit**.

## Code Information

- **Name**: `getCenterNodeId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 58 00`
- **Assembly Address in Memory** : `0x8917648`

## Parameters

- `(int)unit_handle` *(8 bytes)* : Unit handle, obtained from e.g. [getUnitHandle](./getunithandle.md).
- `(int *)destination` *(8 bytes)* : Vairable to *store* the root node.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917648(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
      uVar5 = FUN_088c25e4(iVar3);
      *puVar2 = uVar5;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

