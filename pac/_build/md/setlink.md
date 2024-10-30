# setLink

Connects a model to a node.

## Code Information

- **Name**: `setLink`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 1a 00`
- **Assembly Address in Memory** : `0x8912664`

## Parameters

- `(int)parent_handle` *(8 bytes)* : The parent [handle](./guide/how-to-get-a-handle.md) to contain the child handle.
- `(int *)child_handle` *(8 bytes)* : Handle of the model, e.g. effect, from [addEffect](./addeffect.md).
- `(String)node_name` : The node name from the GXX file.

## Example

Here is one example in hex:

```25 17 1a 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00 / 68 65 6c 6d / 00 00 00 00```

Which is interpreted as:

```c
setLink((int *)iVar1, (int *)iVar0, "helm")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912664(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined *puVar4;
  int iVar5;
  int iVar6;
  undefined *puVar7;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = &DAT_00000100;
  puVar7 = local_100;
  puVar1 = puVar7;
  while (puVar1 != (undefined *)0x0) {
    *puVar7 = 0;
    puVar7 = puVar7 + 1;
    puVar4 = puVar4 + -1;
    puVar1 = puVar4;
  }
  Pac_Get_StringParam(param_2,local_100);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar2,1);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  if (iVar5 != 0) {
    iVar6 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar3,1);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    if (iVar6 != 0) {
      FUN_0887dd5c(iVar6,iVar5,local_100,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

