# setReqActorCount

Sets amount of the given unit or gimmick, see also [setReqActorParam](./setreqactortype.md).

## Code Information

- **Name**: `setReqActorCount`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 0a 00`
- **Assembly Address in Memory** : `0x8b5c738`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator* to set in thoe whole mission.
   - The ID must be unique in same generator, but can use same ID in different generator.
- `(int)amount` *(8 bytes)* : How many units must be duplicated.

## Example

Here is one example in hex:

```
```25 1f 09 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 8d 00 00 00```
25 1f 0a 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 06 00 00 00
```

Which is interpreted as:

```c
setReqActorType(((global)int *)giVar26, (int)0, (int)141)
setReqActorCount(((global)int *)giVar26, (int)0, (int)6)
```

This creates `generatorparam`ID 141 unit, and multiplies it to 6.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c738(int param_1,undefined4 param_2)

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
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    FUN_Mission__08b56828(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

