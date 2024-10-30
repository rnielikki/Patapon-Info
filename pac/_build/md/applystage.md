# applyStage

Applies a stage in given index. The index is decided in [startSetupStage](./startsetupstage.md).

## Code Information

- **Name**: `applyStage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 5f 00`
- **Assembly Address in Memory** : `0x8920078`

## Parameters

- `(int)stage_index` *(8 bytes)* : Stage index from [startSetupStage](./startsetupstage.md).

## Example

Here is one example in hex:

```25 16 5f 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
applyStage((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920078(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_088b03fc(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118));
  FUN_088b0624(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118),*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

