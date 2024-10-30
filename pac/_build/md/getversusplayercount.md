# getVersusPlayerCount

Counts all VS players, including enemies.

## Code Information

- **Name**: `getVersusPlayerCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 31 01`
- **Assembly Address in Memory** : `0x892aa40`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the number of the VS players.

## Example

Here is one example in hex:

```25 16 31 01 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getVersusPlayerCount((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892aa40(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 1;
  iVar2 = Get_Some_Flag();
  iVar2 = *(int *)(iVar2 + 0x44);
  if ((((iVar2 != 0) && (iVar2 != -0x528)) && (iVar2 != -0x24b4)) && (iVar2 != -0x2540)) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x2540);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

