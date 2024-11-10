# appearStaggerItems

Force drop the [staggered item](./setbossctrlstaggeritem.md) from a boss.

## Code Information

- **Name**: `appearStaggerItems`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 1e 00`
- **Assembly Address in Memory** : `0x89b3484`

## Parameters

- `(int *)squad_handle` *(8 bytes)*: Squad Handle ID of the boss.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3484(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar2 != 0) {
    FUN_08975c00(iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

