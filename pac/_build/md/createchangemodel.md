# createChangeModel

Adds a model to a unit. [changeModel](./changemodel.md) is required after this for applying the model.

## Code Information

- **Name**: `createChangeModel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 56 00`
- **Assembly Address in Memory** : `0x891f7ec`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Variable to *store* the unit handle.
- `(String)model_name` : The name of the model to change.

## Example

Here is one example in hex:

```25 16 56 00 / 04 00 00 00 / 0c 00 00 00 / 63 68 72 30 / 32 5f 30 33 / 5f 30 30 32 / 00 00 00 00```

Which is interpreted as:

```c
createChangeModel((int *)iVar12, "chr02_03_002")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f7ec(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined *puVar3;
  int iVar4;
  int iVar5;
  undefined *puVar6;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = &DAT_00000100;
  puVar6 = local_100;
  puVar1 = puVar6;
  while (puVar1 != (undefined *)0x0) {
    *puVar6 = 0;
    puVar6 = puVar6 + 1;
    puVar3 = puVar3 + -1;
    puVar1 = puVar3;
  }
  Pac_Get_StringParam(param_2,local_100);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 9)) {
    FUN_088b9d44(iVar4,0);
    FUN_088b9cf8(iVar4,local_100);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

