# setActorLevel

Sets level of an object (unit, gimmick etc) by the given handle.

## Code Information

- **Name**: `setActorLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 47 00`
- **Assembly Address in Memory** : `0x8915ce0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md) to apply the level.
- `(int)level` *(8 bytes)* : The level value to set.

## Example

Here is one example in hex:

```25 17 47 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
setActorLevel((int *)iVar1, (int *)iVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915ce0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (*(int *)(iVar3 + 0xcc) != 0) {
      *(undefined4 *)(*(int *)(iVar3 + 0xcc) + 8) = *puVar2;
      (**(code **)(*(int *)(iVar3 + 4) + 0x114))(iVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

