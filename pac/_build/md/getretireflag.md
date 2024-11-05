# getRetireFlag

Checks if the player decided to retire.

## Code Information

- **Name**: `getRetireFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 08 01`
- **Assembly Address in Memory** : `0x8928770`

## Parameters

- `(uint *)destination` *(8 bytes)* : Variable to *store* if the player is retired. 0 if player did not retire, 1 if they did.

## Example

Here is one example in hex:

```25 16 08 01 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getRetireFlag((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928770(int param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
     (iVar2 = *(int *)(iVar2 + 0x4c), iVar2 != 0)) {
    *puVar1 = (uint)*(byte *)(iVar2 + 0x27);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

