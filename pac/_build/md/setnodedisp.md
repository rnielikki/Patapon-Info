# setNodeDisp

Shows or hides the node in the object.

## Code Information

- **Name**: `setNodeDisp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 23 00`
- **Assembly Address in Memory** : `0x8913078`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int *)node_index` *(8 bytes)* : Node index, obtained from [getNodeIndex](./getnodeindex.md).
- `(bool)display_node` *(8 bytes)* : 1 shows the object in the node, 0 hides the node objects.

## Example

Here is one example in hex:

```25 17 23 00 / 08 00 00 00 / 5b 00 00 00 / 08 00 00 00 / ff 01 00 00 / 08 00 00 00 / 5d 00 00 00```

Which is interpreted as:

```c
setNodeDisp(((global)int *)giVar91, ((global)int *)giVar511, ((global)int *)giVar93)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913078(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
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
    (**(code **)(**(int **)(iVar4 + 0x60) + 0x68))(*(int **)(iVar4 + 0x60),*puVar2,*piVar3 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

