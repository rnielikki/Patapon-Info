# getNodeDisp

Gets the node display status, if it is shown or hidden.

## Code Information

- **Name**: `getNodeDisp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 22 00`
- **Assembly Address in Memory** : `0x8912f78`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int *)node_index` *(8 bytes)* : Node index, obtained from [getNodeIndex](./getnodeindex.md).
- `(int *)display_node` *(8 bytes)* : Variable to *store* the node display status, 1 displayed and 0 hidden.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912f78(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  uint *puVar3;
  int iVar4;
  uint uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  if (param_1 == 0) {
    iVar4 = 0;
  }
  else {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    else {
      iVar4 = *(int *)(iVar4 + 200);
      if (iVar4 == 0) {
        iVar4 = 0;
      }
    }
  }
  if (iVar4 != 0) {
    uVar5 = (**(code **)(**(int **)(iVar4 + 0x60) + 0x6c))(*(int **)(iVar4 + 0x60),*puVar2);
    *puVar3 = uVar5 & 0xff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

