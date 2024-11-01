# getNodeIndex

Gets specific node ID from the model by given node name.

Useful for e.g. [getNodePos](./getnodepos.md), [getNodeDisp](./getnodedisp.md), or [setNodeDisp](./setnodedisp.md), but can be used for e.g. [callMessageWindow](./callmessagewindow.md).

## Code Information

- **Name**: `getNodeIndex`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 20 00`
- **Assembly Address in Memory** : `0x8912d40`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int *)destination` *(8 bytes)* : Variable to *store* the node index.
- `(String)node_name` : The node name from the GXX file.

## Example

Here is one example in hex:

```25 17 20 00 / 08 00 00 00 / 43 01 00 00 / 08 00 00 00 / ff 01 00 00 / 67 69 72 6f / 74 69 6e 5f / 72 6f 74 00```

Which is interpreted as:

```c
getNodeIndex(((global)int *)giVar323, ((global)int *)giVar511, "girotin_rot")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912d40(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined *puVar4;
  undefined4 uVar5;
  undefined *puVar6;
  int iVar7;
  int *piVar8;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = &DAT_00000100;
  puVar6 = local_100;
  puVar1 = puVar6;
  while (puVar1 != (undefined *)0x0) {
    *puVar6 = 0;
    puVar6 = puVar6 + 1;
    puVar4 = puVar4 + -1;
    puVar1 = puVar4;
  }
  Pac_Get_StringParam(param_2,local_100);
  if (param_1 == 0) {
    iVar7 = 0;
  }
  else {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar2,1);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    else {
      iVar7 = *(int *)(iVar7 + 200);
      if (iVar7 == 0) {
        iVar7 = 0;
      }
    }
  }
  if (iVar7 != 0) {
    *puVar3 = 0xffffffff;
    piVar8 = *(int **)(iVar7 + 0x60);
    if (piVar8 == (int *)0x0) {
      *puVar3 = 0xffffffff;
    }
    else {
      uVar5 = (**(code **)(*piVar8 + 0x48))(piVar8,local_100);
      *puVar3 = uVar5;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

