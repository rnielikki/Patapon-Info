# setThunderLevel

Sets the thunder frequency. This works both in hideout and during mission.

With maximum thunder frequency, thunder hits around once per 6 seconds (1.5 command measurement).

## Code Information

- **Name**: `setThunderLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 75 00`
- **Assembly Address in Memory** : `0x8920c10`

## Parameters

- `(float *)destination` *(8 bytes)* : Variable to *store* how frequent the thunder occurs, the value is **between 0~1**. 0 means no thunder.

## Example

Here is one example in hex:

```25 16 75 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setThunderLevel((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920c10(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
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
    FUN_088fdd8c(*puVar1,iVar2 + 0x1d0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

