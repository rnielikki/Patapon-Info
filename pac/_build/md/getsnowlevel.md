# getSnowLevel

Gets the snowing amount. This works both in hideout and during mission.

## Code Information

- **Name**: `getSnowLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 7e 00`
- **Assembly Address in Memory** : `0x89211bc`

## Parameters

- `(float *)destination` *(8 bytes)* : Variable to *store* how much the snow falls, the level is **between 0~1**. 0 means no snow.

## Example

Here is one example in hex:

```25 16 7e 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getSnowLevel((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089211bc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0x118);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x250);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

