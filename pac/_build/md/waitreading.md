# waitReading

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `waitReading`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 11 00`
- **Assembly Address in Memory** : `0x894935c`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 09 11 00```

Which is interpreted as:

```c
waitReading()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894935c(undefined4 param_1,undefined4 param_2)

{
  char cVar1;
  int iVar2;
  
  iVar2 = FUN_08842ef4(1);
  cVar1 = DLC::Get_Loading_Status(*(undefined4 *)(iVar2 + 0x28),0);
  if (cVar1 == '\0') {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

