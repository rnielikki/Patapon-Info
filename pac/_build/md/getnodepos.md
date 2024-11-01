# getNodePos

Retrives position of the given node.

## Code Information

- **Name**: `getNodePos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 21 00`
- **Assembly Address in Memory** : `0x8912e58`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int *)node` *(8 bytes)* : ID of the node, obtained from [getNodeIndex](./getnodeindex.md)
- `(float *)x` *(8 bytes)* : Variable to *store* the X poisiton of the node.
- `(float *)y` *(8 bytes)* : Variable to *store* the Y position of the node.

## Example

Here is one example in hex:

```25 17 21 00 / 08 00 00 00 / 43 01 00 00 / 08 00 00 00 / ff 01 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getNodePos(((global)int *)giVar323, ((global)int *)giVar511, (float *)fVar0, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912e58(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined auStack64 [48];
  undefined4 local_10;
  undefined4 local_c;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (param_1 == 0) {
    iVar5 = 0;
  }
  else {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    else {
      iVar5 = *(int *)(iVar5 + 200);
      if (iVar5 == 0) {
        iVar5 = 0;
      }
    }
  }
  if (iVar5 != 0) {
    Gimmick::Load_Set_Gimmick_Position(iVar5,*puVar2,auStack64);
    *puVar3 = local_10;
    *puVar4 = local_c;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

