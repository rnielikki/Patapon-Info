# getSquadHandle

Gets squad handle by given generator and ID in the generator.

[getUnitSquadHandle](./getunitsquadhandle.md) is more frequently used.

## Code Information

- **Name**: `getSquadHandle`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 30 00`
- **Assembly Address in Memory** : `0x8b5ec20`

## Parameters

- `(int *)generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int *)destination` *(8 bytes)* : Variable to *store* the squad handle.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5ec20(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0xffffffff;
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
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    uVar5 = FUN_Mission__08b57b08(iVar4,*puVar2);
    *puVar3 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

