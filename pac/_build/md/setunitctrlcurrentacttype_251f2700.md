# setUnitCtrlCurrentActType (251f2700)

> *Other functions have the same name. Check the [Disambiguation page](./setUnitCtrlCurrentActType.md) to find them.*

Sets what the unit is currently doing *by given Generator and ID in the generator*.

## Code Information

- **Name**: `setUnitCtrlCurrentActType`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 27 00`
- **Assembly Address in Memory** : `0x8b5df80`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)command_id` *(8 bytes)* : [Command ID](./guide/reference-table.md#command-ids) to perform now. **The action is limited to march/defend/attack** or nothing (-1).

## Example

Here is one example in hex:

```25 1f 27 00 / 04 00 00 00 / 2b 00 00 00 / 04 00 00 00 / 2a 00 00 00 / 04 00 00 00 / 30 00 00 00```

Which is interpreted as:

```c
setUnitCtrlCurrentActType((int *)iVar43, (int *)iVar42, (int *)iVar48)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5df80(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8), *piVar1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    FUN_Mission__08b57578(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

