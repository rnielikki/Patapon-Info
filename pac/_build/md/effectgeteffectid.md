# effectgetEffectId

Gets Effect ID in `effectparam` by given handle.

## Code Information

- **Name**: `effectgetEffectId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 13 00`
- **Assembly Address in Memory** : `0x89420fc`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the effect, from [addEffect](./addeffect.md).
- `(int *)effect_id` *(8 bytes)* : Variable to *store* the effect ID in `effectparam`.

## Example

Here is one example in hex:

```25 19 13 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
effectgetEffectId((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089420fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  *piVar2 = 0;
  if (iVar3 != 0) {
    *piVar2 = (int)*(short *)(*(int *)(*(int *)(iVar3 + 0x344) + 0x14) + 0x10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

